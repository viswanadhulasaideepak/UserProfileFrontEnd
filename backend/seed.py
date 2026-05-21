from app import app
from database import db
from models import User

with app.app_context():

    users = [
        User(id=1,name="LeanneGraham", email="a@test.com", role="Dev", bio="Developer,"),
        User(id=2,name="Ervin Howell", email="b@test.com", role="Designer", bio="Designer"),
        User(id=3,name="Clementine Bauch", email="c@test.com", role="Manager", bio="Manager"),
        User(id=4,name="Patricia Lebsack", email="d@test.com", role="Dev", bio="Developer"),
        User(id=5,name="Chelsey Dietrich", email="e@test.com", role="QA", bio="Quality Assurance"),
    ]

    db.session.add_all(users)
    db.session.commit()

    print("Users added!")