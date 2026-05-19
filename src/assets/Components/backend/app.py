from flask import Flask,request, jsonify
import json

app=Flask(__name__)

with open("users.json","r") as file:
    users=json.load(file)
    @app.route("/")
    def home():
        return jsonify({
            "message":"User Profile API Running"
        })
    
    @app.route("/users",methods=["GET"])
    def get_users():
        return jsonify(users)    
        
    @app.route("/users/<int:user_id>",methods=["GET"])
    def get_user(user_id):
        user=next((u for u in users if u["id"]== user_id), None)
        
        if user:
            return jsonify(user)
        return jsonify({
            "error":"User not found"
        }),404
      
    @app.route("/users",methods=["POST"])   
    def add_user(): 
        data=request.json
        required_fields=["name","email","role","bio",
                         "company","website"]
        for i in required_fields:
            if i not in data:
                return jsonify({
                    "error":f"{i} is required"
                }),400
            
        new_user={
            "id":len(users)+1,
            "name":data["name"],
            "email":data["email"],
            "role":data["role"],
            "bio":data["bio"],
            "company":data["company"],
            "website":data["website"]
        } 
        users.append(new_user) 
        
        return jsonify({
            "message": "User added successfully",
            "user":new_user
        }),201
        
    if __name__=="__main__":
        app.run(debug=True)      