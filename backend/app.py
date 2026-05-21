from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db
from models import User

app = Flask(__name__)
CORS(app)

# -------------------------
# CONFIG
# -------------------------
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()


# -------------------------
# HOME
# -------------------------
@app.route("/")
def home():
    return jsonify({
        "message": "User Management System API Running"
    })


# -------------------------
# GET ALL USERS
# -------------------------
@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()

    return jsonify({
        "users": [user.to_dict() for user in users]
    })


# -------------------------
# GET USER BY ID
# -------------------------
@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "error": "User not found"
        }), 404

    return jsonify(user.to_dict()), 200


# -------------------------
# CREATE USER
# -------------------------
@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No input data provided"}), 400

    required_fields = ["name", "email", "role"]

    # VALIDATION
    for field in required_fields:
        if not data.get(field):
            return jsonify({
                "error": f"{field} is required"
            }), 400

    # DUPLICATE EMAIL CHECK
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({
            "error": "Email already exists"
        }), 400

    new_user = User(
        name=data["name"],
        email=data["email"],
        role=data["role"],
        bio=data.get("bio", ""),
        company=data.get("company", ""),
        website=data.get("website", "")
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User created successfully",
        "user": new_user.to_dict()
    }), 201


# -------------------------
# UPDATE USER
# -------------------------
@app.route("/users/<int:user_id>", methods=["PUT", "PATCH"])
def update_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "error": "User not found"
        }), 404

    data = request.get_json()

    if not data:
        return jsonify({"error": "No input data provided"}), 400

    user.name = data.get("name", user.name)
    user.email = data.get("email", user.email)
    user.role = data.get("role", user.role)
    user.bio = data.get("bio", user.bio)
    user.company = data.get("company", user.company)
    user.website = data.get("website", user.website)

    db.session.commit()

    return jsonify({
        "message": "User updated successfully",
        "user": user.to_dict()
    }), 200


# -------------------------
# DELETE USER
# -------------------------
@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "error": "User not found"
        }), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({
        "message": "User deleted successfully"
    }), 200


# -------------------------
# RUN SERVER
# -------------------------
if __name__ == "__main__":
    app.run(debug=True)