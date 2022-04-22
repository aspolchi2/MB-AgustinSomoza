import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { coverData } from "../../data/coverData";
import { useMobile } from "../../Hooks/useMobile";
import OrderResume from "../OrderResume/OrderResume";
import headerImg from "./header.jpg";

const Cover = () => {
  const { isMobile } = useMobile();
  //early return if isMobile is true
  if (isMobile === true) {
    return (
      <div>
        <div className="coverHeaderTextMobile">
          <h1>Müssbags</h1>
          <p>Somos auténticas</p>
          <p>Somos apasionadas</p>
        </div>
        <div className="coverMainMobile">
        {coverData.map((res) => (
          <div className={`coverItemMobile`}>
            <LinkContainer to={`/category/${res.name}`}>
              <img src={res.imgMobile} alt={res.name}></img>
            </LinkContainer>
          </div>
        ))}
        </div>
      </div>
    );
  }
  // normal return if is desktop
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
          <div key={i} className={`coverItems ${item.name}`}>
            <LinkContainer to={`/category/${item.name}`}>
              <img src={item.img} alt={item.name}></img>
            </LinkContainer>
          </div>
        ))}
      </div>
      <OrderResume></OrderResume>
    </div>
  );
};

export default Cover;
