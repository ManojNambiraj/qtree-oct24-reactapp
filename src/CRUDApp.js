import axios from "axios";
import React, { useEffect, useState } from "react";

function CRUDApp() {
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

  // Dependancies

  // 1. Empty Dependacy
  // 2. State Management

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Dept</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.dept}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDApp;

// CRUD ---> Create Read Update Delete

// Http ---> POST   GET   PUT   DELETE
