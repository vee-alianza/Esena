from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
    content = StringField("content", validators = [DataRequired(),\
                                                   Length(max=200, message="The comment should be less than 200 characters")])
