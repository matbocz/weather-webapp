import React from "react";

const Form = (props) => (
    <form onSubmit={props.submit}>
        <div className="form-group">
            <input
                id="inputCity"
                className="form-control"
                placeholder="Enter a city"
                type="text"
                value={props.inputValue}
                onChange={props.change}
                aria-describedby="helpCity"
            />
            <small id="helpCity" className="form-text text-muted">
                Please enter a valid city name
            </small>
        </div>

        <button className="btn btn-primary">Search</button>
    </form>
);

export default Form;
