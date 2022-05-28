from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .team import teams

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

    #as member of projects, might include projects with ownership
    joined_projects = db.relationship("Project", back_populates="members", secondary=teams)

    # assigning_tasks = db.relationship("Task", back_populates="assigner")
    assigned_tasks = db.relationship("Task", foreign_keys="Task.assignee_id")


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
            'email': self.email,
            'occupation': self.occupation,
            'bio': self.bio
            # code below causes maximum calls error, add the key-value pairs in routes instead
            # 'owned_projects': [project.to_dict() for project in self.owned_projects],
            # 'joined_projects': [project.to_dict() for project in self.joined_projects],
        }
