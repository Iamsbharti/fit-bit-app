import React from "react";
import "./index.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ExerciseContent from "./components/ExerciseContent";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <ExerciseContent />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
