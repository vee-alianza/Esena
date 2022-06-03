from flask import Blueprint, jsonify, request, render_template
from flask_login import login_required, current_user
from app.models import db, User, Comment
from app.forms.comment_form import CommentForm
from app.forms.delete_form import DeleteForm
from app.api.project_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('')
@login_required
def get_all_comments():
    """
    Getting all comments
    from the database
    """
    all_comments = Comment.query.all()
    comments = {comment.id: comment.to_dict() for comment in all_comments}

    return comments



@comment_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_comment(id):
    """
    Updates comment
    """

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment.query.get(id)
        if comment:
            comment.content = form.data["content"]
            db.session.commit()
            return comment.to_dict()
        else:
            return {'errors': ["Comment not found"]}, 404
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@comment_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_comment(id):
    form = DeleteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(id)
        if comment:
            db.session.delete(comment)
            db.session.commit()
            return {"message": f"Comment {id} was deleted successfully"}
        else:
            return {'errors': ["Comment not found"]}, 404
    return {'errors': ['An error has occurred. Please try again.']}, 401
