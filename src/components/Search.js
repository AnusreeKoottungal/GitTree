import { useState } from "react";
function Search(props) {
  let [searchKey, setSearchKey] = useState("");
  let onClick = () => {
    if (searchKey !== null && searchKey !== undefined && searchKey !== "") {
      console.log(searchKey);
      props.onClick(searchKey);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="search"
            placeholder="username"
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
