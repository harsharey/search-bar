import "./App.css";
import Rawdata from "./Rawdata.json";
import { useState } from "react";

export default function SearchFilter() {
  //const listNames = ["cat", "bat", "mat", "rat"];
  const [showNames, setShowNames] = useState("false");
  const [inputData, setinputData] = useState("");
  const [matchedData, setmatchedData] = useState([]);
  const handleChange = (event) => {
    setinputData(event.target.value);
    inputData.toString();
    event.target.value === "" && setShowNames("false");
  };

  const handleinput = () => {
    setShowNames("true");

    setmatchedData(
      Rawdata.filter(
        (row) =>
          row.first_name.toLowerCase() === inputData.toLowerCase() ||
          row.last_name.toLowerCase() === inputData.toLowerCase()
      )
      // Rawdata.map(
      //   (row) => row.first_name.toLowerCase() === inputData.toLowerCase()
      // )
    );

    // <div>ID:{matchedData.id};</div>;
  };
  const handleReset = (event) => {
    setShowNames("false");
    setinputData("");
    document.getElementById("textBox").value = "";
  };
  console.log(showNames, "show names");
  console.log(inputData, "Input Data");
  console.log(matchedData, "Matched Data");
  return (
    <>
      <div className="Main">
        <img
          src="https://www.citypng.com/public/uploads/preview/download-blue-search-icon-button-png-11640084027s0fkuhz2lb.png "
          alt="searchimg"
          // style={{ width: 50 }}
        ></img>
        &nbsp;&nbsp;
        <input
          id="textBox"
          name="textBox"
          type="textbox"
          placeholder="Enter here"
          onChange={handleChange}
        />
        &nbsp;&nbsp;
        <button
          id="searchB"
          name="searchB"
          type="searchButton"
          onClick={handleinput}
        >
          Search
        </button>
        <button id="resetButton" type="resetButton" onClick={handleReset}>
          Reset
        </button>
      </div>
      {showNames === "true" && matchedData.length !== 0 && (
        <>
          {matchedData.map((value) => {
            return (
              <div key={value.id}>
                <div>
                  <strong>ID:</strong>
                  {value.id}
                </div>
                <div>
                  <strong>FirstName:</strong> {value.first_name}
                </div>
                <div>
                  <strong>LastName:</strong> {value.last_name}
                </div>
              </div>
            );
          })}
        </>
      )}
      {showNames === "true" && matchedData.length === 0 && (
        <>
          <div> No data found!! </div>
        </>
      )}

      {/* {showNames === "true" &&
        Rawdata.map((item) => {
          return (
            <div>
              {" "}
              {item.first_name} {item.last_name}
            </div>
          );
        })} */}
    </>
  );
}
