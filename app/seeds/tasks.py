from app.models import db, Task
from datetime import datetime


def seed_tasks():
    task1 = Task(name="create docs", description="feature list, user stories, database schema",
                 end_date=datetime(2022, 10, 1), status_id=3, priority_id=1, assigner_id=1, assignee_id=2, project_id=1)
    task2 = Task(name="draw db diagram",
                 end_date=datetime(2022, 10, 10), status_id=3, priority_id=1, assigner_id=2, assignee_id=3, project_id=1, is_completed=True)

    db.session.add(task1)
    db.session.add(task2)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
