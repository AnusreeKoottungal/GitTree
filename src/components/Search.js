import { useState } from "react";
function Search(props) {
  let [searchKey, setSearchKey] = useState("");
  let [searchDisabled, setSearchDisabled] = useState(true);
  let onClick = () => {
    if (searchKey !== null && searchKey !== undefined) {
      let searchTerm = searchKey.trim();
      if(searchTerm !== "")
      props.onClick(searchTerm);
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
              setSearchDisabled(!(e.target.value && e.target.value.trim() !== ""));
              setSearchKey(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-md-4">
          <button disabled={searchDisabled} className="btn btn-primary" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
