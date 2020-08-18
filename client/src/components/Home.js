import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Navbar";

const Home = () => {
  const [part, setPart] = useState("leftWrist");
  var images = require(`../output/${part}.json`);

  return (
    <>
      <NavBar></NavBar>
      <Header className="form-group">
        <label htmlFor="part">Part Name</label>
        <select
          value={part}
          onChange={(e) => setPart(e.target.value)}
          className="form-control"
          placeholder="Part Name"
        >
          <option selected value="leftWrist">
            leftWrist
          </option>
          <option value="rightWrist">rightWrist</option>
          <option value="back">back</option>
          <option value="mask">mask</option>
        </select>
      </Header>
      <MainContainer>
        {images.map((image, key) => (
          <div className="container" key={key}>
            <Link to={`/${part}${image.id}`}>{image.title}</Link>
            <br />
            <img
              src={require(`../output/${part}/${part}${image.id}.jpg`)}
              alt="validation"
            ></img>
            <hr />
          </div>
        ))}
      </MainContainer>
    </>
  );
};

export default Home;

const Header = styled.div`
  justify-content: center;
  max-width: 70rem;
  margin: 2rem auto;
`;

const MainContainer = styled.div`
  margin: 3rem auto;
  display: grid;
  max-width: 70rem;
  grid-gap: 1rem;

  @media (min-width: 36rem) {
     {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 55rem) {
     {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h2 {
    margin: 0 0 2rem;
  }

  .container {
    text-align: center;
  }

  .container > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
