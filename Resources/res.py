import subprocess
from flask_restful import Resource
from flask import redirect, render_template, request, url_for


def request_validation(data, *keys):
    for key in keys:
        if key not in data.keys():
            return key
    return None


class Home(Resource):
    def get(self):
        return render_template("index.html")


class Check(Resource):
    def post(self):
        if request.method == "POST":
            user = request.form["nm"]
            return redirect(url_for("user", usr=user))
        else:
            return render_template("check.html")

    def get(self):
        pass


class User(Resource):
    def get(self, usr):
        query = f"{usr} LinkedIn {usr} Facebook {usr} Instagram"
        process = subprocess.run(
            ['python3', 'google_search.py', query], capture_output=True, text=True)
        urls = process.stdout.splitlines()
        urls_html = ''.join(f"<p>{url}</p>" for url in urls)
        return f"<h1>{usr} Socials</h1>{urls_html}"
