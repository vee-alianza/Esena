from .db import db
from datetime import datetime

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    create_date = db.Column(db.Date, nullable=False, default=datetime.now().date())

    task_id = db.Column(db.Integer, db.ForeignKey("tasks.id"), nullable=False)
    task = db.relationship("Task", back_populates="comments")

    author_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    author = db.relationship("User")

    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "create_date": self.create_date,
            "task": self.task.name,
            "author_id": self.author.id,
            "task_id": self.task_id
        }
