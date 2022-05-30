from datetime import datetime
from .db import db


class Task(db.Model):
    __tablename__ = "tasks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    create_date = db.Column(db.Date, nullable=False, default=datetime.now().date())
    end_date = db.Column(db.Date, nullable=False)
    is_completed = db.Column(db.Boolean, nullable=False, default=False)

    status_id = db.Column(db.Integer, db.ForeignKey("statuses.id"), nullable=False)
    status = db.relationship("Status", back_populates="tasks")

    priority_id = db.Column(db.Integer, db.ForeignKey("priorities.id"), nullable=False)
    priority = db.relationship("Priority", back_populates="tasks")

    assigner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    assigner = db.relationship("User", foreign_keys=[assigner_id])

    assignee_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    assignee = db.relationship("User", foreign_keys=[assignee_id], overlaps="User.assignee,assigned_tasks")

    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    project = db.relationship("Project", back_populates="tasks")

    comments = db.relationship("Comment", back_populates="task", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "create_date": self.create_date.strftime("%m/%d/%Y"),
            "end_date": self.end_date.strftime("%m/%d/%Y"),
            "status": self.status.name,
            "status_id": self.status_id,
            "priority": self.priority.name,
            "priority_id": self.priority_id,
            "is_completed": self.is_completed,
            "assigner_id": self.assigner.id,
            "assignee_id": self.assignee.id,
            "project_id": self.project.id,
            "comments": {comment.id: comment.to_dict() for comment in self.comments}
        }
