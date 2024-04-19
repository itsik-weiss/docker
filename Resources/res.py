import subprocess
import google_search
from flask_restful import Resource
from flask import redirect, render_template, request, url_for
from bs4 import BeautifulSoup as bs


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
        user = request.json["nm"]
        # print(f' this user is : {user["nm"]}') For Testing
        result = google_search.process_name(user)
        return {"result": result} 
  

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
