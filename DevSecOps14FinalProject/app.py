from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS
from Resources.res import Home, Check, User

app = Flask(__name__, template_folder='templates')
api = Api(app, prefix='/api')
CORS(app)  # Allow CORS for all routes


api.add_resource(Home, '/')
api.add_resource(Check, '/check')
api.add_resource(User, '/<usr>')

if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")
