import { useState } from "react";

function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("");

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Convereted to upper case", "success");
  }

  function handleLowClick() {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Convereted to lower case", "success");
  }

  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Removed extra spaces", "success");
  }

  function handleClearClick() {
    setText("");
    showAlert("Cleared the text", "success");
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    showAlert("your text is copied", "success");
  }

  function handleOnChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <div className={`container ${mode === "dark" ? "text-light" : ""}`}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            placeholder="Enter your text here."
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: mode === "dark" ? "#424a51" : "#fff",
              color: mode === "dark" ? "#fff" : "#424a51",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy text
        </button>
        <button className="btn btn-primary my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className={`container my-3 ${mode === "dark" ? "text-light" : ""}`}>
        <h2>Your text summary</h2>
        <p>
          {text === ""
            ? 0
            : text.split(" ").length -
              text.split(" ").filter((e) => e === "").length}{" "}
          words, {text.length} characters
        </p>
        <p>
          {text === "" ? "0" : text.split(" ").length * 0.0032 * 60} seconds to
          read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here."}
        </p>
      </div>
    </>
  );
}

export default TextForm;
