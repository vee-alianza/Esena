from .db import db

teams = db.Table(
    "teams",
    db.Column("project_id", db.Integer, db.ForeignKey(
        "projects.id"), primary_key=True),
    db.Column("member_id", db.Integer, db.ForeignKey(
        "users.id"), primary_key=True)
)
