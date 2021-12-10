import { Weather } from '../hooks/weather';
import CardWeather from './card-weather';
import Loading from './loading';
import React from 'react';
import dayjs from 'dayjs';

const Card = ({ location }) => {
    const { data, isLoading, isError } = Weather(location);
    const [selectedIndex, setIndex] = React.useState(0);

    if (isLoading || isError) return <Loading />;
    return (
        <>
            <CardWeather city={data.city} weather={data.list[selectedIndex]} />
            <div className="m-4 border-t border-yellow-600">
                <div className="">
                    {data.list.map((item, index) => {
                        return (
                            <ul className={`mt-4 cursor-pointer rounded-lg p-1 ${selectedIndex === index ? "bg-rootblue" : ""}`} key={index} onClick={() => setIndex(index)}>
                                <li className="flex flex-row text-white p-1">
                                    <span className="flex-1 text-left">
                                        {dayjs(item.date).format('dddd')}
                                    </span>
                                    <span className="text-yellow-600 hover:text-yellow-700 text-2xl">
                                        <span className={item.weather.icon_name}></span>
                                    </span>
                                    <span className="flex-1 text-right">
                                        {item.temp.min}&deg; / {item.temp.max}&deg;
                                    </span>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Card;