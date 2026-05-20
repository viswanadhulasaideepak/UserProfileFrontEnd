from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open("users.json", "r") as file:
    users = json.load(file)

def save_users():
    with open("users.json", "w") as file:
        json.dump(users, file, indent=4)

@app.route("/")
def home():
    return jsonify({"message": "User Management Backend Running"})

@app.route("/users", methods=["GET"])
def get_users():
    return jsonify(users)

@app.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    for user in users:
        if user["id"] == id:
            return jsonify(user)

    return jsonify({"error": "User not found"}), 404

@app.route("/users", methods=["POST"])
def add_user():
    new_user = request.json
    new_user["id"] = len(users) + 1
    new_user["following"] = False
    new_user["profileImg"] = ""

    users.append(new_user)
    save_users()

    return jsonify({
        "message": "User added successfully",
        "user": new_user
    })

@app.route("/users/<int:id>", methods=["PUT"])
def update_user(id):
    updated_data = request.json

    for user in users:
        if user["id"] == id:
            user["name"] = updated_data.get("name", user["name"])
            user["role"] = updated_data.get("role", user["role"])
            user["email"] = updated_data.get("email", user["email"])
            user["company"] = updated_data.get("company", user["company"])
            user["bio"] = updated_data.get("bio", user["bio"])

            save_users()

            return jsonify({
                "message": "User updated successfully",
                "user": user
            })

    return jsonify({"error": "User not found"}), 404

@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    for user in users:
        if user["id"] == id:
            users.remove(user)
            save_users()

            return jsonify({"message": "User deleted successfully"})

    return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)