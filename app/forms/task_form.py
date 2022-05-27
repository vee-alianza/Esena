from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired
from app.models.user import User

#get all teammates from db as choices of assignee_id
class TaskForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    end_date = DateField("end date", validators=[DataRequired()])
    assignee_id = SelectField("assignee")
    priority_id = SelectField("priority", choices=[1, 2, 3])
    status_id = SelectField("status", choices=[1, 2, 3])
    is_completed = BooleanField("is_completed")
    #for test only:
    submit = SubmitField("Create Task")
