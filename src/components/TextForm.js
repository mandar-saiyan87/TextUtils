import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  let count =
    0.008 *
    text.split(" ").filter((elem) => {
      return elem.length !== 0;
    }).length;
  let wordCount = count.toFixed(3);

  function handleChange(e) {
    setText(e.target.value);
  }

  function upperCaseClick() {
    setText(text.toUpperCase());
    props.showAlert("Text changed to Uppercase.", "Success");
  }

  function lowerCaseClick() {
    setText(text.toLowerCase());
    props.showAlert("Text changed to Lowercase.", "Success");
  }

  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces.", "Success");
  }

  function clear() {
    setText("");
    props.showAlert("Cleared text area.", "Success");
  }

  function titleCase() {
    let newArray = [];
    let newText = text.split(" ");
    newText.forEach((w) => {
      let words = [
        "is",
        "and",
        "an",
        "the",
        "a",
        "am",
        "Is",
        "And",
        "An",
        "The",
        "A",
        "Am",
        "IS",
        "AND",
        "AN",
        "THE",
        "A",
        "AM",
        "of",
        "OF",
        "Of",
        "or",
        "OR",
        "Or",
      ];
      if (words.includes(w)) {
        let word = w.toLowerCase();
        newArray.push(word);
      } else {
        let newWord = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        newArray.push(newWord);
      }
    });
    setText(newArray.join(" "));
    props.showAlert("Text changes to titlecase.", "Success");
  }

  return (
    <>
      <div className="container my-4">
        <h2>Enter Your Text Below</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Enter text here!!"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={upperCaseClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={lowerCaseClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={removeExtraSpaces}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={titleCase}
        >
          Title Case
        </button>
      </div>
      <div className="container my-5">
        <h3>Your Text Summary</h3>
        <p>
          {text
            ? text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length
            : 0}{" "}
          words, {text.length} characters
        </p>
        <p>{text ? wordCount : 0} Minutes Read</p>
      </div>
    </>
  );
}

export default TextForm;
