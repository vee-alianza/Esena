from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.models import db, User, Project, Task
from app.forms.delete_form import DeleteForm
from app.forms.task_form import TaskForm

task_routes = Blueprint('tasks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@task_routes.route('/<int:id>', methods=["PUT"])
#commented out for test only
# @login_required
def update_task(id):
    """
    Updates a task
    """
    #check if current_user.id == assigner_id:
    
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task = Task.query.get(id)
        if task:
            task.name = form.data['name']
            task.description = form.data['description']
            task.end_date = form.data['end_date']
            task.is_completed = form.data['is_completed']
            task.priority_id = form.data['priority_id']
            task.status_id = form.data['status_id']
            task.assignee_id = form.data['assignee_id']
            db.session.commit()
            return task.to_dict()
        else:
            return {'errors': ['Task not found.']}, 404

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@task_routes.route('/<int:id>', methods=["DELETE"])
#commented out for test only
# @login_required
def delete_task(id):
    form = DeleteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
    #check if current_user.id == assigner_id:
        task = Task.query.get(id)
        if task:
            db.session.delete(task)
            db.session.commit()
            return {'message': f'Task {id} successfully deleted.'}
        else:
            return {'errors': ['Task not found.']}, 404
    return {'errors': ['An error has occurred. Please try again.']}, 401