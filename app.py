from flask import Flask, request
from flask_restful import Api
from Resources.res import *

# import google_search

app = Flask(__name__, template_folder='templates')
api = Api(app, prefix='/api')

api.add_resource(Home, '/')
api.add_resource(Check, '/check')
api.add_resource(User, '/<usr>')


if __name__ == "__main__":
    app.run(debug=True, port=5001)

