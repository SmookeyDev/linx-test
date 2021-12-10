import dayjs from 'dayjs';

const CardWeather = ({ city, weather }) => {
    return (
        <>
            <div className="m-4">
                <div className="sm">
                    <p className="tracking-wide text-2xl text-white font-semibold">
                        {city.name}, {city.country}
                    </p>
                    <p className="text-gray-400 tracking-wide">
                        {dayjs(weather.date).format('dddd')}, {weather.weather.description}
                    </p>
                </div>
                <div className="flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide">
                    <span className="mt-6 md:mt-10 text-white font-light">
                        {weather.temp.actual}&deg;
                        <span className="flex flex-col text-gray-400 font-normal tracking-wide text-base mt-1">
                            Feels like {weather.feels_like}&deg;
                        </span>
                        <span className="flex flex-col text-gray-400 font-normal tracking-wide text-base mt-1">
                            Clouds {weather.clouds}%
                        </span>
                    </span>
                    <div className="text-8xl sm:text-9xl mt-4 text-yellow-600">
                        <span className={weather.weather.icon_name}></span>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:flex-row md:space-x-5">
                    <div className="text-yellow-600  mt-1">
                        <i className="wi wi-strong-wind text-xl"></i>
                        <span className="ml-1 mr-2 text-white tracking-wide">
                            {weather.wind_speed} m/s winds
                        </span>
                        <i className="wi wi-humidity text-xl"></i>
                        <span className="ml-1 text-white tracking-wide">
                            {weather.humidity}% humidity
                        </span>
                    </div>
                    <div className="text-yellow-600  mt-1">
                        <i className="wi wi-sunrise text-xl"></i>
                        <span className="ml-1 mr-2 text-white tracking-wide">
                            {city.sunrise}
                        </span>
                        <i className="wi wi-sunset text-xl"></i>
                        <span className="ml-1 text-white tracking-wide">
                            {city.sunset}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardWeather;