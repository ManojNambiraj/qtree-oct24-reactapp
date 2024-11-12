import React from "react";
import "./App.css";

function CreateUser() {
  return (
    <div className="mainContainer">
      <form>
        <h2>User Register</h2>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input type="number" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Dept
          </label>
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mobile</label>
          <input type="number" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
