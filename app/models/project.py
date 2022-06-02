from .db import db
from .team import teams
from datetime import datetime

class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    is_archived = db.Column(db.Boolean, nullable=False, default=False)
    is_private = db.Column(db.Boolean, nullable=False)

    priority_id = db.Column(db.Integer, db.ForeignKey("priorities.id"), nullable=False)
    priority = db.relationship("Priority", back_populates="projects")

    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    owner = db.relationship("User", back_populates="owned_projects")

    status_id = db.Column(db.Integer, db.ForeignKey("statuses.id"), nullable=False)
    status = db.relationship("Status", back_populates="projects")

    tasks = db.relationship("Task", back_populates="project", cascade="all, delete-orphan")

    members = db.relationship("User", back_populates="joined_projects", secondary=teams)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "start_date": self.start_date.strftime("%m/%d/%Y"),
            "end_date": self.end_date.strftime("%m/%d/%Y"),
            "is_archived": self.is_archived,
            "is_private": self.is_private,
            "priority": self.priority.name,
            "priority_id": self.priority_id,
            "owner_id": self.owner.id,
            "status": self.status.name,
            "status_id": self.status_id,
            "tasks": {task.id: task.to_dict() for task in self.tasks},
            "members": [member.id for member in self.members]
        }
