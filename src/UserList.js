import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const usersData = await axios.get(
      `https://67321a5c7aaf2a9aff13778b.mockapi.io/student`
    );

    setState(usersData.data);
  };

  const handleDelete = async (id) => {
    const deletedData = await axios.delete(
      `https://67321a5c7aaf2a9aff13778b.mockapi.io/student/${id}`
    );

    if (deletedData) {
      getData();
    }
  };

  return (
    <div>
      <Link to={"/createUser"} className="btn btn-primary m-4">
        Create user
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Dept</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.dept}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
