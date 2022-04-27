import React from "react";
import { Card, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Card>
      <Card.Header>FOR MORE PROJECTS</Card.Header>
      <Card.Body>
        <Card.Title>
          There are more fun projects! Please clicked the link below and enjoy
        </Card.Title>
        {/* <Card.Text>Please</Card.Text> */}
        <Button variant="outline-secondary" style={{ margin: "0 5px" }}>
          Go somewhere
        </Button>
        <Button variant="outline-secondary" style={{ margin: "0 5px" }}>
          Go somewhere
        </Button>
        <Button variant="outline-secondary" style={{ margin: "0 5px" }}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}; // ending line

export default Footer;
