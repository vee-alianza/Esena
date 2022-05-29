from app.models import db, Task
from datetime import datetime


def seed_tasks():
    db_task1 = Task(name="Write database documents", description="User entities, user stories, application functionalities, and database schema",
                 end_date=datetime(2022, 10, 2), status_id=3, priority_id=1, assigner_id=1, assignee_id=2, project_id=1, is_completed=False)
    db_task2 = Task(name="Draw DB Diagram", description="Map out one-to-many relationships, join tables for many-to-many relationships",
                 end_date=datetime(2022, 10, 10), status_id=3, priority_id=1, assigner_id=2, assignee_id=3, project_id=1, is_completed=False)
    
    redux_task1 = Task(name="Design redux state", description="Need data organization at each level of state", end_date=datetime(2022, 6, 10), assigner_id=2, status_id=2, priority_id=2, assignee_id=1, project_id=2, is_completed=False)
    redux_task2 = Task(name="Write store actions and reducers", description="Write redux store actions and reducers, careful not to mutate state", end_date=datetime(2022,6,13), status_id=1, priority_id=1, assigner_id=1, assignee_id=3, project_id=2, is_completed=False)
    
    leetcode_task1 = Task(name="Study heaps", description="Understand how to implement min and max heaps in Python", end_date=datetime(2022,9,12), status_id=3, priority_id=1, assignee_id=2, assigner_id=3, project_id=3, is_completed=False)
    leetcode_task2 = Task(name="Finish Leetcode Problem 87", description="Solve Leetcode 87, Scramble String", end_date=datetime(2022,9,18), status_id=2, priority_id=3, assignee_id=1, assigner_id=2, project_id=3, is_completed=False)
    leetcode_task3= Task(name="Backtracking DFS tutorial", description="Watch Abdul Bari's video on Backtracking and recursive DFS on Youtube", end_date=datetime(2022,9,22), status_id=1, priority_id=3,assigner_id=2, assignee_id=3, project_id=3, is_completed=False)

    db.session.add(db_task1)
    db.session.add(db_task2)
    db.session.add(redux_task1)
    db.session.add(redux_task2)
    db.session.add(leetcode_task1)
    db.session.add(leetcode_task2)
    db.session.add(leetcode_task3)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
