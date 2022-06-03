from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def is_strong_password(form, field):
    password = field.data
    reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$"

    # compiling regex
    pattern = re.compile(reg)

    # searching regex
    match = re.search(pattern, password)

    # validating conditions
    if not match:
        raise ValidationError("Password should have at least one number, one special symbol, one uppercase and one lowercase character. Password shold be 6 - 20 characters long.")

class SignUpForm(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired(message="This field is required."),\
                                           Length(max=40, message="First name should be less than 40 characters.")])
    last_name = StringField('last name', validators=[DataRequired(message="This field is required."),\
                                           Length(max=40, message="Last name should be less than 40 characters.")])
    occupation = StringField('occupation', validators=[DataRequired(message="This field is required."),\
                                           Length(max=100, message="Occupation should be less than 100 characters.")])
    bio = TextAreaField('bio')
    email = StringField('email', validators=[DataRequired(message="This field is required."), Email(message="Please, provide a valid email address."), user_exists])
    password = StringField('password', validators=[DataRequired(message="This field is required."), is_strong_password])
