import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

const Annotate = () => {
  const queryString = window.location.pathname.replace("/", "");
  const part = queryString.replace(/[0-9]/g, "");
  var image = { filename: queryString + ".jpg" };

  const [select, setSelect] = useState("valid");

  const changeOnClick = (e) => {
    e.preventDefault();

    image.status = select;
    console.log(image);
  };

  return (
    <>
      <NavBar></NavBar>
      <AnnotateContainer>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="container">
            <h4>Filename: {image.filename}</h4>
            <br />
            <img
              src={require(`../output/${part}/${image.filename}`)}
              alt="validation"
            ></img>
            <hr />
          </div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-outline-primary">
              <input
                type="radio"
                name="options"
                value="valid"
                checked={select === "valid"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Valid
            </label>
            <label className="btn btn-outline-danger">
              <input
                type="radio"
                name="options"
                value="invalid"
                checked={select === "invalid"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Invalid
            </label>
            <label className="btn btn-outline-secondary">
              <input
                type="radio"
                name="options"
                value="unusable"
                checked={select === "unusable"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Unusable
            </label>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </AnnotateContainer>
    </>
  );
};

export default Annotate;

const AnnotateContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 30rem;
  text-align: center;

  .container > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
