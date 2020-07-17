import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";

const APIKey = "0ad8cfe8f31c124b14fb76eb2da3c25e";

class Weather extends Component {
    state = {
        inputValue: "",
        error: false,
        city: "",
        description: "",
        temp: "",
        pressure: "",
        humidity: "",
        sunrise: "",
        sunset: "",
        wind: "",
        icon: "",
    };

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${APIKey}&units=metric`;

        fetch(API)
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                throw Error("Response error");
            })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    error: false,
                    city: this.state.inputValue,
                    description: data.weather[0].description,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    wind: data.wind.speed,
                    icon: data.weather[0].icon,
                });
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    city: this.state.inputValue,
                });
            });
    };

    render() {
        return (
            <>
                <Form
                    inputValue={this.state.inputValue}
                    change={this.handleChange}
                    submit={this.handleSubmit}
                />

                <Result weather={this.state} />
            </>
        );
    }
}

export default Weather;
