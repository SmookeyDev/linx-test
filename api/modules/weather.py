import requests
import json
from decouple import config
from datetime import datetime, timezone, timedelta

class Weather:
    def __init__(self):
        self.API_KEY = config('API_KEY')
        self.filters = Filters()

    def get_weather(self, location):
        weather_url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={self.API_KEY}'
        forecast_url = f'https://api.openweathermap.org/data/2.5/forecast?q={location}&appid={self.API_KEY}'
        weather_response = requests.get(weather_url).json()
        forecast_response = requests.get(forecast_url).json()

        if(weather_response['cod'] != 200 or forecast_response['cod'] != '200'):
            return weather_response

        weather_data = self.filters.filter_weather(weather_response)
        forecast_data = self.filters.filter_forecast(forecast_response)
        weather_data['city'] |= forecast_data['city']
        weather_data['list'] += forecast_data['list']

        return weather_data


class Filters:
    def __init__(self):
        icons_file = open("./icons.json", "r")
        self.icons = json.load(icons_file)

    def filter_weather(self, data):
        final_data = {'list': []}

        # Pega o horário atual baseado no timezone e retorna o mesmo, além de um boolean informando se é dia ou noite
        actual_time = datetime.now(timezone(timedelta(hours=data['timezone'] / 3600), 'UTC'))
        if actual_time.hour < 6 or actual_time.hour > 18:
            icon_name = self.icons['night'][str(data['weather'][0]['id'])]['icon']
            is_day = False
        else:
            icon_name = self.icons['day'][str(data['weather'][0]['id'])]['icon']
            is_day = True

        # Filtra a previsão do dia, formatando os valores da forma correta
        final_data['city'] = {
            "actual_time": actual_time.strftime('%H:%M:%S'),
            'is_day': is_day,
        }

        final_data['list'].append({
            "clouds": data['clouds']['all'],
            "date": datetime.fromtimestamp(data['dt']).strftime('%m/%d/%Y'),
            "feels_like": round(data['main']['feels_like'] - 273.15),
            "humidity": round(data['main']['humidity']),
            "weather": {
                "icon_name": f"wi wi-{icon_name}",
                "description": data['weather'][0]['description']
            },
            "pressure": data['main']['pressure'],
            "temp": {
                "actual": round(data['main']['temp'] - 273.15),
                "max": round(data['main']['temp_max'] - 273.15),
                "min": round(data['main']['temp_min'] - 273.15)
            },
            "wind_speed": round(data['wind']['speed'] * 3.6)
        })

        return final_data

    def filter_forecast(self, data):
        return_data = {}

        # Filtra as previsões, deixando apenas as de 12:00:00
        return_data['list'] = list(
            filter(lambda x: x['dt_txt'].endswith('12:00:00'), data['list']))

        # Filtra a chave "city"
        return_data['city'] = {
            "coord": data['city']['coord'],
            "country": data['city']['country'],
            "name": data['city']['name'],
            "sunrise": datetime.fromtimestamp(data['city']['sunrise']).strftime('%H:%M:%S'),
            "sunset": datetime.fromtimestamp(data['city']['sunset']).strftime('%H:%M:%S'),
            "timezone": data['city']['timezone'] / 3600
        }

        # Filtra as previsões, formatando os valores da forma correta
        return_data['list'] = list(map(lambda x: {
            "clouds": x['clouds']['all'],
            "date": datetime.fromtimestamp(x['dt']).strftime('%m/%d/%Y'),
            "feels_like": round(x['main']['feels_like'] - 273.15),
            "humidity": round(x['main']['humidity']),
            "weather": {
                "icon_name": f"wi wi-{self.icons['day'][str(x['weather'][0]['id'])]['icon']}",
                "description": x['weather'][0]['description']
            },
            "temp": {
                "actual": round(x['main']['temp'] - 273.15),
                "max": round(x['main']['temp_max'] - 273.15),
                "min": round(x['main']['temp_min'] - 273.15)
            },
            "wind_speed": round(x['wind']['speed'] * 3.6)
        }, return_data['list']))

        return return_data
