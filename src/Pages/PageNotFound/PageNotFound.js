import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const PageNotFound = () => {
    const history = useHistory();

    return (
        <div id="colorlib-notfound">
            <div className="colorlib-notfound">
                <div className="colorlib-notfound-404">
                    <h1 id="colorlib_404_customizer_page_heading">Oops</h1>
                    <h2 id="colorlib_404_customizer_content">Page Not Found</h2>
                </div>
                <button
                    onClick={() => history.goBack()}
                    id="colorlib_404_customizer_button_text"
                >
                    GO Back
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;
