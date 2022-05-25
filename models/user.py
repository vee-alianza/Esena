from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    occupation = db.Column(db.String(150), nullable=False)
    bio = db.Column(db.Text)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    
    #as owner of projects
    owned_projects = db.relationship("Project", back_populates="owner")

    #as member of projects
    teams = db.relationship("Team", back_populates="members")

    # assigning_tasks = db.relationship("Task", back_populates="assigner")
    # assigned_tasks = db.relationship("Task", back_populates="assignee")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'owned_projects': self.owned_projects,
            'joined_projects': [project.name for project in self.team.projects if self.team.member_id == self.id]
        }
