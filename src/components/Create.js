import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [validated, setValidated] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();

    setValidated(true);
    if (isValid) {
      axios
        .post("http://localhost:5000/users", inputData)
        .then((res) => {
          alert("Add successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container className="w-50">
      <h2 className="text-center">Add User</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="card p-5"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
            <Form.Control.Feedback>Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            />
            <Form.Control.Feedback>Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            <Form.Control.Feedback>Good!</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="mt-4">
            Create
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Create;
