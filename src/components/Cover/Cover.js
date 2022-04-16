import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { coverData } from "../../data/coverData";
import headerImg from "./header.jpg";

const Cover = () => {
  return (
    <div className="cover">
      <div className="coverHeader">
        <img
          src={headerImg}
          alt="foto de portada"
          className="img-fluid coverHeaderImg"
        ></img>
        <div className="coverHeaderText">
          <h1>Müssbags</h1>
          <p>Somos auténticas</p>
          <p>Somos apasionadas</p>
        </div>
      </div>
      <div className="coverMain">
        {coverData.map((item, i) => (
          <div key={i}>
            <LinkContainer to={`/detail/${item.name}`}>
              <img src={item.img}></img>
            </LinkContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cover;
