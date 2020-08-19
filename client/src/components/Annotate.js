import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Annotate = () => {
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState("");
  const queryString = window.location.pathname.replace("/", "");
  const part = queryString.replace(/[0-9]/g, "");
  var image = { filename: `${queryString}.jpg` };
  var id_ = Number(queryString.replace(part, ""));

  const changeOnClick = (e) => {
    e.preventDefault();

    image.status = select;

    axios
      .post("/annotations/add", image)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  const nextImage = () => {
    setMessage("");
  };

  return (
    <>
      <NavBar></NavBar>
      <AnnotateContainer>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="container">
            <h4>Filename: {image.filename}</h4>
            <br />
            {message && <span className="message">{message}</span>}
            <img
              src={require(`../output/${part}/${image.filename}`)}
              alt="validation"
            ></img>
            <hr />
          </div>
          <div className="btn-group" data-toggle="buttons">
            <label className="btn btn-outline-primary">
              <input
                type="radio"
                value="valid"
                checked={select === "valid"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Valid
            </label>
            <label className="btn btn-outline-danger">
              <input
                type="radio"
                value="invalid"
                checked={select === "invalid"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Invalid
            </label>
            <label className="btn btn-outline-secondary">
              <input
                type="radio"
                value="unusable"
                checked={select === "unusable"}
                onChange={(e) => setSelect(e.target.value)}
              />{" "}
              Unusable
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <Link
              to={`/${part}${(++id_).toString()}`}
              className="btn btn-outline-success"
              onClick={nextImage}
            >
              Next
            </Link>
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

  .message {
    color: tomato;
  }

  .btn-primary {
    margin: 2rem;
  }
`;
