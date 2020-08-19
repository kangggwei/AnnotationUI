import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Navbar";
import axios from "axios";
import { saveAs } from "file-saver";

const Home = () => {
  const [part, setPart] = useState("leftWrist");
  const [imageCollections, setImageCollections] = useState("");
  var images = require(`../output/${part}.json`);

  const saveFile = () => {
    const fileName = "annotation.json";
    const fileToSave = new Blob(
      [JSON.stringify(imageCollections, undefined, 2)],
      {
        type: "application/json",
        name: fileName,
      }
    );
    saveAs(fileToSave, fileName);

    setImageCollections("");
  };

  const download = () => {
    axios
      .get(`/annotations/`)
      .then((res) => setImageCollections(res.data))
      .catch((err) => console.log(err));
  };

  const deleteAll = () => {
    axios
      .delete(`/annotations/delete`)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar></NavBar>
      <Header className="form-group">
        <div className="toggling">
          <button onClick={download} className="btn btn-outline-success">
            Download
          </button>
          <button onClick={saveFile} className="btn btn-outline-success">
            Save Local File
          </button>
          <button onClick={deleteAll} className="btn btn-outline-danger">
            Reset
          </button>
        </div>
        <br />
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
  margin: 1rem auto;

  .btn {
    margin: 1rem 1rem 1rem 0;
  }
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
