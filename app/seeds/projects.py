from app.models import db, User, Project

from datetime import datetime


def seed_projects():
    db_project = Project(name="Database Design", description="Design and build database with data mapping and relationships. Migrate and seed database with appropriate data for testing purposes.", start_date=datetime(2022,10,1), end_date=datetime(2022,11,1), is_archived=False, is_private=True, priority_id=1, status_id=1, owner_id=1)
    
    redux_project = Project(name="Redux Store", description="Be able to pull data from database at the root level, to store and access data at any component of our application, without making additional fetch requests.", start_date=datetime(2022,6,3), end_date=datetime(2022,7,11), is_archived=False, is_private=False, priority_id=1, status_id=1, owner_id=2)
    
    leetcode_project = Project(name="Study Algorithms", description="Be familiar with all forms of data structures, be able to solve problems efficiently with proper implementation of data structures and algorithms", start_date=datetime(2022,8,15), end_date=datetime(2022,10,1), is_archived=False, is_private=False, priority_id=2, status_id=3, owner_id=1)

    aws_project = Project(name="AWS S3", description="Implement image upload feature to AWS S3 storages", start_date=datetime(2022,11,3), end_date=datetime(2022,11,10), is_archived=False, is_private=True, priority_id=2, status_id=2, owner_id=6)

    performance_project = Project(name="Optimizations", description="Investigate performance dips from last week", start_date=datetime(2022,7,12), end_date=datetime(2022,7,15), is_archived=False, is_private=False, priority_id=3, status_id=3, owner_id=8)

    ux_project = Project(name="UX Improvement", description="Improve UX functionality and design across app components", start_date=datetime(2022,8,12), end_date=datetime(2022,8,23), is_archived=False, is_private=False, priority_id=1, status_id=3, owner_id=4)


    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)
    user4 = User.query.get(4)
    user5 = User.query.get(5)
    user6 = User.query.get(6)
    user7 = User.query.get(7)
    user8 = User.query.get(8)
    
    db_project.members.append(user2)
    db_project.members.append(user3)

    redux_project.members.append(user3)
    redux_project.members.append(user1)

    leetcode_project.members.append(user2)
    leetcode_project.members.append(user3)

    aws_project.members.append(user1)
    aws_project.members.append(user5)
    aws_project.members.append(user7)

    performance_project.members.append(user1)
    performance_project.members.append(user6)

    ux_project.members.append(user8)
    ux_project.members.append(user1)

    db.session.add(db_project)
    db.session.add(redux_project)
    db.session.add(leetcode_project)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
