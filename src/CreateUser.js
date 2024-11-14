import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    email: "",
    dept: "",
    mobile: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = await axios.post(
      `https://67321a5c7aaf2a9aff13778b.mockapi.io/student`,
      userInput
    );

    if (postData) {
      navigate("/");
    }
  };

  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit}>
        <h2>User Register</h2>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            name="age"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Dept
          </label>
          <input
            type="text"
            class="form-control"
            name="dept"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Mobile</label>
          <input
            type="number"
            class="form-control"
            name="mobile"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
