import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useMobile } from "../../Hooks/useMobile";
import headerImg from "./header.jpg";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

const Cover = () => {
  const { isMobile } = useMobile();
  const [cover, setCover] = useState([]);
  
  useEffect(() => {
    const coverRef = collection(db, "cover");
    getDocs(coverRef).then((data) => {
      setCover(
        data.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    });
  }, [isMobile]);

  if (isMobile === true) {
    return (
      <div>
        <div className="coverHeaderTextMobile">
          <h1>Müssbags</h1>
          <p>Somos auténticas</p>
          <p>Somos apasionadas</p>
        </div>
        <div className="coverMainMobile">
          {
            cover.map((data, i)=> (
              <LinkContainer to={`/category/${data.name}`} key={i}>
                <img src={data.imgMobile} alt={data.name}></img>
              </LinkContainer>
              
              
            ))
          }
          
          
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
        {cover.map((item, i) => (
          <div key={i} className={`coverItems ${item.name}`}>
            <LinkContainer to={`/category/${item.name}`}>
              <img src={item.img} alt={item.name}></img>
            </LinkContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cover;
