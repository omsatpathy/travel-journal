import React from "react";

import globeLogo from "../images/globe-logo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <img src={globeLogo} alt="" className="nav--logo" />
            <p>my travel journal</p>
        </div>
    )
}