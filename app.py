from flask import Flask, redirect, url_for, render_template, request
import subprocess
import json
from flask_restful import Api, Resource
from Resources.res import *

app = Flask(__name__, template_folder='templates')
api = Api(app, prefix='/api')

api.add_resource(Home, '/')
api.add_resource(Check, '/check')
api.add_resource(User, '/<usr>')

if __name__ == "__main__":
    app.run(debug=True, port=5001)
