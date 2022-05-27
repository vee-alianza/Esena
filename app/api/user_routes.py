from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.models import db, User, Project
from app.forms.project_form import ProjectForm

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    # print("******************", user.to_dict())
    # return user.to_dict()
    user_dict = user.to_dict()

    # print("************", user.owned_projects)

    owned_projects = {project.id: project.to_dict() for project in user.owned_projects}
    joined_projects = {project.id: project.to_dict() for project in user.joined_projects}

    assigned_tasks = {task.id: task.to_dict() for task in user.assigned_tasks}

    user_dict["owned_projects"] = owned_projects
    user_dict["joined_projects"] = joined_projects
    user_dict["assigned_tasks"] = assigned_tasks

    return user_dict


@user_routes.route('/<int:id>/projects', methods=["POST"])
#commented out for test only
# @login_required
def create_project(id):
    """
    Creates a new project
    """
    #check if current_user.id == id:
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data['description'])
    print(form.data['start_date'])
    if form.validate_on_submit():
        print('here')
        project = Project(
            name=form.data['name'],
            description=form.data['description'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
            is_public=form.data['is_public'],
            priority_id=form.data['priority_id'],
            status_id=form.data['status_id'],
            owner_id=id
        )
        project.members.append(current_user)
        members = form.data['members'].strip().split(" ")
        for member_id in members:
            member = User.query.get(int(member_id))
            project.members.append(member)
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    print('error ***')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401