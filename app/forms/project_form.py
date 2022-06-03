from xml.dom import ValidationErr
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, ValidationError, InputRequired
from datetime import date

class ProjectForm(FlaskForm):
    name = StringField("name", validators=[DataRequired(message="This field is required."),\
                                           Length(max=255, message="The name should be less than 255 characters.")])
    description = TextAreaField("description", validators=[DataRequired(),\
                                                           Length(max=2000, message="The description should be less than 2000 characters.")])
    start_date = DateField("start_date", validators=[DataRequired(message="This field is required.")])
    end_date = DateField("end_date", validators=[DataRequired(message="This field is required.")])
    is_private = BooleanField("is_private")
    priority_id = SelectField("priority", choices=[1, 2, 3], validators=[InputRequired(message="Please select a field.")])
    status_id = SelectField("status", choices=[1, 2, 3], validators=[InputRequired(message="Please select a field.")])
    members = StringField("members", validators=[DataRequired(message="This field is required.")])


    def validate_end_date(form, field):
            if (field.data < date.today()):
                raise ValidationError('End date cannot be in the past.')

    def validate_end_date(form, field):
            if (field.data < form.start_date.data):
                raise ValidationError('End date must come after start date.')
