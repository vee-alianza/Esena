from app.models import db, Priority


def seed_priorities():
    low = Priority(name="Low")
    medium = Priority(name="Medium")
    high = Priority(name="High")

    db.session.add(low)
    db.session.add(medium)
    db.session.add(high)

    db.session.commit()


def undo_priorities():
    db.session.execute('TRUNCATE priorities RESTART IDENTITY CASCADE;')
    db.session.commit()
