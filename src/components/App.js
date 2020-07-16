import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/superhero/bootstrap.min.css";
import Weather from "./Weather";

function App() {
    return (
        <div className="container">
            <Weather />

            <footer className="fixed-bottom">
                <div className="text-center py-4 bg-primary text-white">
                    &copy; 2020 Copyright:
                    <a href="https://github.com/matbocz" className="text-white">
                        {" "}
                        Mateusz Boczarski
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
