import React from "react";
import searchIcon from "../icons/search.svg";

const Form = (props) => (
    <form onSubmit={props.submit} className="form-row mt-4">
        <div className="col-10">
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
        </div>
        <div className="col">
            <button className="btn btn-primary w-100">
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    </form>
);

export default Form;
