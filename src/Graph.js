import React from "react"
// import { data } from "./data"

export function Graph(props) {


    const items = props.data.map((item, idx) => <div className="graph-bar tooltip" style={{ "height": "span(item.amount)" }}>
        <span className="tooltiptext">${item.amount}</span>
        <div></div>
        <h6 className="day">{item.day}</h6></div >)
    return (
        <div className="graphdivs"  >
            {items}
        </div>
    )
}