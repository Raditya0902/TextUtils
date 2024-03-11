import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled.", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#424a51";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled.", "success");
    }
  }

  // const router = createBrowserRouter([
  //   { path: "/about", element: <About /> },
  //   {
  //     path: "/",
  //     element: (
  //       <TextForm
  //         heading="Enter the text to analyze below."
  //         mode={mode}
  //         showAlert={showAlert}
  //       />
  //     ),
  //   },
  // ]);

  return (
    <>
      <Navbar
        title="TextUtils"
        // aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} className="my-1" />
      <div className="container my-3" id="main">
        <TextForm
          heading="Enter the text to analyze below."
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
