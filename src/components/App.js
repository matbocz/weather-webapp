import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/superhero/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
    return (
        <div className="container">
            <Weather />

            <Footer />
        </div>
    );
}

export default App;
