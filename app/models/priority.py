from .db import db


class Priority(db.Model):
    __tablename__ = "priorities"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)

    projects = db.relationship("Project", back_populates="priority")
    tasks = db.relationship("Task", back_populates="priority")

    # def to_dict(self):
    #     return {
    #         "id": self.id,
    #         "name": self.name,
    #         "projects": [project.name for project in self.projects],
    #         "tasks": [task.name for task in self.tasks]
    #     }
