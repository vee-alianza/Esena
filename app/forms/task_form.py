from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired
from app.models.user import User

# num_of_users = len(User.query.all())

class TaskForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    end_date = DateField("end date", validators=[DataRequired()])
    assignee_id = SelectField("assignee", choices=[i for i in range(10)])
    priority_id = SelectField("priority", choices=[1, 2, 3])
    status_id = SelectField("status", choices=[1, 2, 3])
    is_completed = BooleanField("is_completed")
    #for test only:
    # submit = SubmitField("Create Project")
