from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.forms.user_form import UserForm
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


@user_routes.route('')
@login_required
def users():
    """
    Gets all users (for search)
    """

    users = User.query.all()
    return {"users": {user.id: user.to_dict() for user in users}}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    user_dict = user.to_dict()

    owned_projects = {project.id: project.to_dict() for project in user.owned_projects}
    joined_projects = {project.id: project.to_dict() for project in user.joined_projects}

    # assigned_tasks = {task.id: task.to_dict() for task in user.assigned_tasks}
    projects_dict = owned_projects
    projects_dict.update(joined_projects)

    projects = list(projects_dict.values())
    teammates = []
    for project in projects:
        teammates.extend(project["members"])
    teammates = list(set(teammates))
    if id in teammates:
        teammates.remove(id)

    tasks = {}
    for project in user.owned_projects:
        tasks.update(project.to_dict()["tasks"])
    for project in user.joined_projects:
        tasks.update(project.to_dict()["tasks"])


    user_dict['teammates'] = teammates
    user_dict['tasks'] = tasks
    user_dict['projects'] = projects_dict
    return user_dict


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_profile(id):
    form = UserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.filter(
            User.id == id, User.id == current_user.id).first()
        if user:
            user.first_name = form.data['first_name']
            user.last_name = form.data['last_name']
            user.occupation = form.data['occupation']
            user.email = form.data['email']
            user.bio = form.data['bio']
            db.session.commit()
            return user.to_dict()
        else:
            return {'errors': ['User does not exist']}, 404
    return{'errors': validation_errors_to_error_messages(form.errors)}, 401

@user_routes.route('/<int:id>/projects', methods=["POST"])
#commented out for test only
@login_required
def create_project(id):
    """
    Creates a new project
    """
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        project = Project(
            name=form.data['name'],
            description=form.data['description'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
            is_private=form.data['is_private'],
            priority_id=form.data['priority_id'],
            status_id=form.data['status_id'],
            owner_id=id
        )
        members = form.data['members'].strip().split(" ")
        for member_id in members:
            member = User.query.get(int(member_id))
            project.members.append(member)
        db.session.add(project)
        db.session.commit()
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
