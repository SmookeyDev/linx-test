from flask import Flask
from flask import jsonify
from flask import request

from modules.weather import Weather

app = Flask(__name__)

weather = Weather()

@app.route('/get_weather', methods=['GET'])
def get_weather():
    location = request.args.get('q')
    data = weather.get_weather(location)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
