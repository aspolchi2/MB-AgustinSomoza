import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useMobile } from "../../Hooks/useMobile";
import headerImg from "./header.jpg";
import useFirebase from "../../Hooks/useFirebase";

const Cover = () => {
  const { isMobile } = useMobile();
  const { firebase } = useFirebase("cover");
  const [show, setShow] = useState(true)
  const handleClick = () => {
    show ? setShow(false) : setShow(true)

  }

  if (isMobile === true) {
    return (
      <div>
        <div className="coverHeaderTextMobile">
          <h1>Müssbags</h1>
          <p>Somos auténticas</p>
          <p>Somos apasionadas</p>
        </div>
        <div className="coverMainMobile">
          {firebase.map((data, i) => (
            <LinkContainer to={`/category/${data.name}`} key={i}>
              <img src={data.imgMobile} alt={data.name}></img>
            </LinkContainer>
          ))}
        </div>
      </div>
    );
  }
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
        {firebase.map((item, i) => (
          <div key={i} className={`coverItems ${item.name}`}>
            <LinkContainer to={`/category/${item.name}`}>
              <img src={item.img} alt={item.name}></img>
            </LinkContainer>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>{ show ? 'hide this element' : 'show this element'}</button>
      { show && <p>hide this</p>}
    </div>
  );
};

export default Cover;
