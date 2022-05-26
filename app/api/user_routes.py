from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Project

user_routes = Blueprint('users', __name__)


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
    
