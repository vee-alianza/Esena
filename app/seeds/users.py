from app.models import db, User

def seed_users():
    demo = User(first_name='Demo', last_name='User', occupation='Software Engineer', bio="Hi, it's me Demo", email='demo@aa.io', password='password')
    ethan = User(first_name="Ethan", last_name="Chen", occupation="Software Engineer", bio="Hey, I'm Ethan. This application is pretty cool!", email="ethan@aa.io", password='password')
    lana = User(first_name="Lana", last_name="Komar", occupation="Software Engineer", bio="Hi, I'm Lana! I'm a passionate software engineer, let's connect!", email="lana@aa.io", password='password')
    john = User(first_name='John', last_name='Smith', occupation='UX Designer', bio="Hey, I'm an a passionate UX Designer. Let's connect!", email='john@aa.io', password='password')
    sally = User(first_name="Sally", last_name="Chang", occupation="Product Marketer", bio="Hi, I'm Sally! Been in product marketing for 5 years and I love it.", email='sally@aa.io', password='password')
    eric = User(first_name="Eric", last_name="Chen", occupation="Cloud Architect", bio="Currently busy, please don't assign me anything!", email="eric@aa.io", password='password')
    vee = User(first_name="Vee", last_name="Alianza", occupation="Software Engineer", bio="Hi, I'm Vee. I can make cool websites!", email="vee@aa.io", password='password')
    xiaowen = User(first_name="Xiaowen", last_name="Nie", occupation="Software Engineer", bio="Hey, I'm Xiaowen! Connect with me for any software related requests.", email="xiaowen@aa.io", password='password')



    db.session.add(demo)
    db.session.add(john)
    db.session.add(sally)
    db.session.add(eric)
    db.session.add(vee)
    db.session.add(xiaowen)
    db.session.add(lana)
    db.session.add(ethan)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
