from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Length

class UserForm(FlaskForm):
    first_name = StringField('First Name', [DataRequired(message="This field is required."),\
                                           Length(max=40, message="First name should be less than 40 characters.")])
    last_name = StringField('Last Name', [DataRequired(message="This field is required."),\
                                           Length(max=40, message="Last name should be less than 40 characters.")])
    occupation = StringField("Occupation", [DataRequired(message="This field is required."),\
                                           Length(max=100, message="Occupation should be less than 100 characters.")])
    email = StringField('Email', validators=[DataRequired()])
    bio = TextAreaField('Bio', validators=[Length(max=500, message="Bio should be less than 500 characters")])
