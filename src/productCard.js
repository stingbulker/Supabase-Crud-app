import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function ProductCard() {
  const [editing, setEditing] = useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Product Description</Card.Text>
        <Button variant="danger">Delete Product</Button>
        <Button variant="secondary">Edit Product</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
