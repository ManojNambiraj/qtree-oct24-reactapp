import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    email: "",
    dept: "",
    mobile: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await axios.get(
      `https://67321a5c7aaf2a9aff13778b.mockapi.io/student/${id}`
    );

    setUserInput(user.data);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = await axios.put(
      `https://67321a5c7aaf2a9aff13778b.mockapi.io/student/${id}`,
      userInput
    );

    if (postData) {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="mainContainer">
        <form onSubmit={handleSubmit}>
          <h2>Edit User</h2>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              value={userInput.name}
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
              value={userInput.age}
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
              value={userInput.email}
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
              value={userInput.dept}
              name="dept"
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Mobile</label>
            <input
              type="number"
              class="form-control"
              value={userInput.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
