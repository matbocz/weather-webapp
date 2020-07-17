import React from "react";

const Result = (props) => {
    const {
        error,
        city,
        description,
        temp,
        pressure,
        humidity,
        sunrise,
        sunset,
        wind,
        icon,
    } = props.weather;

    const errorMessage = (
        <>
            <div className="card text-center mt-2">
                <h5 className="card-header">{`City not found`}</h5>
            </div>
        </>
    );

    let content = null;

    if (!error && city) {
        const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(
            "en-US"
        );
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString("en-US");

        content = (
            <>
                <div className="card text-center mt-2">
                    <h5 className="card-header">Weather in {city}</h5>
                    <div className="card-body">
                        <h5 className="card-title">
                            {description[0].toUpperCase() +
                                description.slice(1)}
                        </h5>
                        <img src={iconURL} alt="Weather icon" />
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Temperature: {Math.round(temp)} °C
                        </li>
                        <li className="list-group-item">
                            Pressure: {pressure} hpa
                        </li>
                        <li className="list-group-item">
                            Humidity: {humidity} %
                        </li>
                        <li className="list-group-item">Wind: {wind} m/s</li>
                        <li className="list-group-item">
                            Sunrise: {sunriseTime}
                        </li>
                        <li className="list-group-item">
                            Sunset: {sunsetTime}
                        </li>
                    </ul>
                </div>
            </>
        );
    }

    return <>{error ? errorMessage : content}</>;
};

export default Result;
