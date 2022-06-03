from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.models import db, User, Project, Task
from app.forms.project_form import ProjectForm
from app.forms.delete_form import DeleteForm
from app.forms.task_form import TaskForm

project_routes = Blueprint('projects', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@project_routes.route('/<int:id>')
@login_required
def get_project(id):
    """
    Gets a project
    """
    project = Project.query.get(id)
    if project:
        return project.to_dict()
    else:
        return {'errors': ['Project not found.']}, 404


@project_routes.route('/<int:id>', methods=["PUT"])
# commented out for test only
@login_required
def update_project(id):
    """
    Updates a project
    """
    # check if current_user.id == owner_id:

    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project.query.get(id)
        if project:
            project.name = form.data['name']
            project.description = form.data['description']
            project.start_date = form.data['start_date']
            project.end_date = form.data['end_date']
            project.is_private = form.data['is_private']
            project.priority_id = form.data['priority_id']
            project.status_id = form.data['status_id']

            members = form.data['members'].strip().split(" ")
            project.members = []
            for member_id in members:
                member = User.query.get(int(member_id))
                project.members.append(member)
            db.session.add(project)
            db.session.commit()
            return project.to_dict()
        else:
            return {'errors': ['Project not found.']}, 404
    # return render_template("project_test.html", form=form)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@project_routes.route('/<int:id>', methods=["DELETE"])
# commented out for test only
@login_required
def delete_project(id):
    # form = DeleteForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    # check if current_user.id == owner_id:
    project = Project.query.get(id)
    if project:
        db.session.delete(project)
        db.session.commit()
        return {'message': f'Project {id} successfully deleted.'}
    else:
        return {'errors': 'Project not found.'}, 404


# return {'errors': ['An error has occurred. Please try again.']}, 401


@project_routes.route('/<int:id>/tasks', methods=["POST"])
# commented out for test only
@login_required
def create_task(id):
    """
    Creates a new task
    """
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    project = Project.query.get(id)
    choices = project.to_dict()["members"]
    choices.append(project.owner_id)
    form.assignee_id.choices = choices

    if form.validate_on_submit():
        task = Task(
            name=form.data['name'],
            description=form.data['description'],
            end_date=form.data['end_date'],
            status_id=form.data['status_id'],
            priority_id=form.data['priority_id'],
            assignee_id=form.data['assignee_id'],
            is_completed=form.data["is_completed"],
            assigner_id=current_user.id,
            project_id=id
        )
        db.session.add(task)
        db.session.commit()
        return task.to_dict()
    # return render_template("task_test.html", form=form)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
