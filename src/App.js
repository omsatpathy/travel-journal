import React from "react";
import "./App.css"
import data from "./data"

import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function App() {
    const dataElements = data.map((item) => {
        return (
            <Card
                title = {item.title}
                location = {item.location}
                googleMapUrl = {item.googleMapUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
             />
        )
    })
    return (
        <div>
            <Navbar />
            <section className="card-list" style={{display : "flex" , flexDirection : "column" , overflow : "scroll"}}>
                {dataElements}
            </section>
        </div>
    )
}