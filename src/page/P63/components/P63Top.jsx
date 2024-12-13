import { useEffect, useState } from "react";
import "./P63Top.css";

const P63Top = ({ imageSrc, altText }) => {
    const today = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = week[today.getDay()];

    const [weather, setWeather] = useState(null);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c80e0084d2561acf60206541abf57eb2`;
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        console.log(data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div className="cartoon-grid">
            <img src={imageSrc} alt={altText} className="cartoon-image" />
            <div className="p63-top-container">
                <div className="date-section">
                    <span className="year">{year}년</span>
                    <span className="month">{month}월</span>
                    <span className="day">{date}일</span>
                    <span className="week">{day}요일</span>
                    <div className="weather-container">
                        <span>날씨:</span>
                        <div className="weather-section">
                            {weather?.weather[0]?.icon && (
                                <img
                                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt="weather icon"
                                    className="weather-icon"
                                />
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default P63Top;
