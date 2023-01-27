/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as S from "./styles";
import godfather from "../../assets/images/godfather.png";
import img2 from "../../assets/images/img2.png";
import deliver from "../../assets/images/deliver-map.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <S.MainHome>
      <S.MainContent>
        <div className="content-container">
          <div className="img-container">
            <img src={`${godfather.src}`} alt=""style={{height: '250px'}} />
          </div>
          <div className="home-text">
            <h2>
              Os melhores funkos para sua coleção você encontra aqui na
              FUNKSHOP!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolorum in illum officiis beatae quibusdam ex eveniet debitis
              animi,
            </p>
          </div>
        </div>

        <div id="reverse" className="content-container">
          <div className="img-container">
            <img src={`${img2.src}`} alt="" style={{ width: "300px" }} />
          </div>
          <div className="home-text">
            <h2>
              Descubra heróis, vilões, celebridades, criaturas e muito mais!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolorum in illum officiis beatae quibusdam ex eveniet debitis
              animi,
            </p>
            <Link href="/product"><button style={{cursor: 'pointer'}}>Explorar</button></Link>
          </div>
        </div>

        <div className="content-container">
          <div className="img-container">
            <img src={`${deliver.src}`} alt="" style={{ width: "400px" }} />
          </div>
          <div className="home-text">
            <h2>
                Entregamos em todo o Brasil.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolorum in illum officiis beatae quibusdam ex eveniet debitis
              animi
            </p>
          </div>
        </div>
      </S.MainContent>
    </S.MainHome>
  );
};

export default Home;
