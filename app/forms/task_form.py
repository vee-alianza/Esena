from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, ValidationError, InputRequired
from app.models.user import User
from datetime import date


class TaskForm(FlaskForm):
    name = StringField("name", validators=[DataRequired(message="This field is required."),\
                                           Length(max=255, message="The name should be less than 255 characters.")])
    description = TextAreaField("description", validators=[Length(max=2000, message="The description should be less than 2000 characters.")])
    end_date = DateField("end date", validators=[DataRequired(message="This field is required.")])
    assignee_id = SelectField("assignee", validators=[InputRequired(message="Please select a field.")])
    priority_id = SelectField("priority", choices=[1, 2, 3], validators=[InputRequired(message="Please select a field.")])
    status_id = SelectField("status", choices=[1, 2, 3], validators=[InputRequired(message="Please select a field.")])
    is_completed = BooleanField("is_completed")


    def validate_end_date(form, field):
            if (field.data < date.today()):
                raise ValidationError('End date cannot be in the past.')
