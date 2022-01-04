import React from "react";
import "../style.css";
import Card from "./Card";

const CardList = ({ datas }) => {
  return (
    <div>
      <div className="lists">
        {datas.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};
export default CardList;
