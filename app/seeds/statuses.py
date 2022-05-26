from app.models import db, Status

def seed_statuses():
    off_track = Status(name="Off track")
    at_risk = Status(name="At risk")
    on_track = Status(name="On track")

    db.session.add(off_track)
    db.session.add(at_risk)
    db.session.add(on_track)

    db.session.commit()


def undo_statuses():
    db.session.execute('TRUNCATE statuses RESTART IDENTITY CASCADE;')
    db.session.commit()
