from telnetlib import SE
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    start_date = DateField("start date", validators=[DataRequired()])
    end_date = DateField("end date", validators=[DataRequired()])
    is_public = BooleanField("public?")
    priority_id = SelectField("priority", choices=[1, 2, 3])
    status_id = SelectField("status", choices=[1, 2, 3])

    #for test only:
    submit = SubmitField("Create Project")
