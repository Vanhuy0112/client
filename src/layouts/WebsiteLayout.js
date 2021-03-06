import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WebsiteLayout(props) {
    return (
        <div className=" font-sans">

            <Header {...props} />

            <main>
                {props.children}

            </main>
            <div>
                <Footer {...props} />

            </div>
        </div>
    )
}