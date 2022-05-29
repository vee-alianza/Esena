from app.models import db, Task
from datetime import datetime


def seed_tasks():
    db_task1 = Task(name="Write database documents", description="User entities, user stories, application functionalities, and database schema",
                 end_date=datetime(2022, 10, 1), status_id=3, priority_id=1, assigner_id=1, assignee_id=2, project_id=1, is_completed=False)
    db_task2 = Task(name="Draw DB Diagram", description="Map out one-to-many relationships, join tables for many-to-many relationships",
                 end_date=datetime(2022, 10, 10), status_id=3, priority_id=1, assigner_id=2, assignee_id=3, project_id=1, is_completed=False)

    db.session.add(db_task1)
    db.session.add(db_task2)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
