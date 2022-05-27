from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.models import db, User, Project
from app.forms.project_form import ProjectForm

project_routes = Blueprint('projects', __name__)

#GET method for test only  
@project_routes.route('/<int:id>/projects', methods=["GET", "POST"])
#commented out for test only
# @login_required
def update_project(id):
    """
    Creates a new project
    """
    #check if current_user.id == id:
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
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
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    #for test
    return render_template("project_test.html", form=form)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401