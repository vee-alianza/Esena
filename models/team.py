from .db import db

class Team(db.Model):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key=True)
    
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    project = db.relationship("Project", back_populates="team")

    member_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    members = db.relationship("User", back_populates = "teams")