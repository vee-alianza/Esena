from app.models import db, User, Project

from datetime import datetime


def seed_projects():
    flask_project = Project(name="flask project", description="test", start_date=datetime(2022,10,1), end_date=datetime(2022,11,1), is_archived=False, is_public=True, priority_id=1, status_id=1, owner_id=1)
    react_project = Project(name="react project", description="test", start_date=datetime(2022,8,1), end_date=datetime(2022,2,1), is_archived=False, is_public=True, priority_id=1, status_id=1, owner_id=2)


    user2 = User.query.get(2)
    flask_project.members.append(user2)

    user3 = User.query.get(3)
    react_project.members.append(user3)

    db.session.add(flask_project)

    db.session.add(react_project)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
