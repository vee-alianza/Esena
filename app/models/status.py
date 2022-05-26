from .db import db


class Status(db.Model):
    __tablename__ = "statuses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)

    tasks = db.relationship("Task", back_populates="status")
    projects = db.relationship("Project", back_populates="status")

    # def to_dict(self):
    #     return {
    #         "id": self.id,
    #         "name": self.name,
    #         "tasks": [task.name for task in self.tasks],
    #         "projects": [project.name for project in self.projects]
    #     }
