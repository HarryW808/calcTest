from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    user_input = request.json.get("input") 
    try:
        result = eval(user_input)
    except:
        result = "Invalid input"
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
