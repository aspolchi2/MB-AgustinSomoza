import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { coverData } from "../../data/coverData";


const Cover = () => {
  return (
      <div className="cover">
{coverData.map((item) => (
    <div className={`${item.name} coverCard`}>
        <Link to={`/category/${item.name}`}>
            <img src={item.img} alt={item.name} className="img-fluid"/>
        </Link>
    </div>
))}
      </div>
  )
  
};

export default Cover;
