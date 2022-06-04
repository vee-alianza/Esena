from app.models import db, Comment


def seed_comments():
    comment1 = Comment(content="Should we include other details in the subject?", task_id=1, author_id=2)
    comment2 = Comment(content="We need to revamp the design for this", task_id=2, author_id=2)

    db.session.add(comment1)
    db.session.add(comment2)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
