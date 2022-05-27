from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

class UserForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    occupation = StringField("Occupation", validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    bio = TextAreaField('Bio', validators=[DataRequired()])
