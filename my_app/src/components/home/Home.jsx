import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const frameStyles = {
    width: "1186px",
    height: "245px",
    background: isHovered
      ? "linear-gradient(90deg, #236b96, #3c8cc3, #236b96)"
      : "linear-gradient(90deg, #3498db, #5ab2e3, #3498db)",
    border: "1px solid #2980b9",
    borderRadius: "10px",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    transition: "background 0.3s",
    cursor: "pointer",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div
        style={frameStyles}
        className="frame"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Welcome to My Home Page</h1>
      </div>
    </Container>
  );
}

export default Home;
