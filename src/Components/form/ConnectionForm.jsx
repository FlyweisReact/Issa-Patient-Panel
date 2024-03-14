import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./form.css";
export const ConnectionForm = () => {
    const navigate=useNavigate()
    const onSubmit = () => {};

  return (
    <div className="form-container-wrapper-connectionPage-main">
      <div className="form-container-wrapper-connectionPage">
        <img
          style={{
            maxWidth: "155px",
            maxHeight: "55px",
            margin: "auto",
            marginBottom: "2rem",
          }}
          src="./issa_logo_login.jpg"
          alt="logo1"
        />
        <p style={{ color: "#0C5C75" }}>Connection Details</p>
        <hr style={{ color: "black" }} />
        <Form
          style={{
            marginTop: "2rem",
            textAlign: "left",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Server Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Host" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Site ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Port" />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              style={{
                marginTop: "2rem",
                backgroundColor: "#0C5C75",
                borderColor: "#0C5C75",
                padding: "0.5rem 2.5rem",
              }}
              type="submit" onClick={() => {
                  navigate("/login")
              }}
            >
              CONNECT
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
};
