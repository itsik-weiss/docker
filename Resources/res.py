import subprocess
import google_search
from flask_restful import Resource
from flask import redirect, render_template, request, url_for
from bs4 import BeautifulSoup as bs
import requests
import ssl


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
        try:
            data = request.json
            print(f"Received data: {data}")  # Log the received data
            if isinstance(data, dict) and "nm" in data:
                user = data["nm"]
                print(f"Processing name: {user}")  # Log the processing name
                result = google_search.process_name(user)
                return {"result": result}
            else:
                print("Invalid request data format")
                return {"error": "Invalid request data format"}, 400
        except Exception as e:
            print(f"An error occurred: {e}")
            return {"error": "An error occurred while processing the request"}, 500

    def get(self):
        pass


class User(Resource):
    def get(self, usr):
        query = f"{usr} LinkedIn {usr} Facebook {usr} Instagram"
        print(f"Querying social media for: {usr}")  # Log the query
        process = subprocess.run(
            ['python3', 'google_search.py', query], capture_output=True, text=True)
        urls = process.stdout.splitlines()
        urls_html = ''.join(f"<p>{url}</p>" for url in urls)
        return f"<h1>{usr} Socials</h1>{urls_html}"


ssl._create_default_https_context = ssl._create_stdlib_context
