import React from "react";

function CardItems(props) {
  var item = props.item;
  return (
    <div className="card-item">
      <div>
        <p>{item.year}</p>
        <h2 style={{ margin: "0" }}>{item.title}</h2>
      </div>
      <ul>
        <li>{item.platform}</li>
      </ul>
    </div>
  );
}

function Card(props) {
  var state = props.section;
  return (
    <div className="main-content">
      <h1>
        My <span style={{ color: "#83b4ff" }}>{state.title}</span>
      </h1>
      <p className="desc">{state.desc}</p>
      <div className="card">
        {state.items.map((item, index) => {
          return <CardItems key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Card;
