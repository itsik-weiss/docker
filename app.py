from flask import Flask, redirect, url_for, render_template, request 
import subprocess
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/check", methods=["POST", "GET"])
def check():
    if request.method == "POST":
        user = request.form["nm"]
        return redirect(url_for("user", usr=user))
    else:
        return render_template("check.html")

# @app.route("/<usr>")
# def user(usr):
#     return f"<h1>{usr} Socials </h1>"

@app.route("/<usr>")
def user(usr):
    query = f"{usr} LinkedIn {usr} Facebook {usr} Instagram"
    process = subprocess.run(['python3', 'google_search.py', query], capture_output=True, text=True)
    urls = process.stdout.splitlines()
    urls_html = ''.join(f"<p>{url}</p>" for url in urls)
    return f"<h1>{usr} Socials</h1>{urls_html}"


if __name__ == "__main__":
    app.run(debug=True)