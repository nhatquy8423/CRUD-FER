import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  if (!list) return <p>Loading!</p>;
  const handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios
        .delete(`http://localhost:5000/users/${id}`)
        .then((res) => {
          alert("Delete successfully!");
          setList((prevList) => prevList.filter((list) => list.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">List User</h1>
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">
          Create
        </Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/update/${item.id}`} className="btn btn-success">
                  Update
                </Link>{" "}
                {"  "}
                <Button
                  onClick={() => handleSubmit(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
