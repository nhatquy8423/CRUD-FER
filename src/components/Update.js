import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: ",",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => res.setInputData(res.data))
      .catch((err) => console.log(err));
  });
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      axios
        .put("http://localhost:5000/users/" + id, inputData)
        .then((res) => {
          alert("Update successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container className="w-50">
      <h2 className="text-center">Update User </h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handelSubmit}
        className="card p-5"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={inputData.username}
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-4" style={{ width: "150px" }}>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
