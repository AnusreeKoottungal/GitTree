import Node from "./Node";
import Search from "./Search";
import { useState } from "react";

function Home() {
  let [data, setData] = useState(null);
  let [hasError, setError] = useState(false);
  const searchUser = (key) => {
    try{
      //TODO - handle pagination for users with more than 30 repos
    fetch(`https://api.github.com/users/${key}`)
      .then((result) => {
        if (result.ok) {
          result
            .json()
            .then((data) => {
              setError(false);
              setData(data);
            })
            .catch(() => {
              setError(true);
            });
        } else {
           setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      });
    } catch(error) {
      setError(true);
    }
  }
  return (
    <div className="mt-5">
      <Search onClick={searchUser}></Search>
      {hasError && <div className="container text-start mt-1">No data found for given username</div>}
      {data && !hasError && (
        <Node
          isExpanded={false}
          data={data}
          level={0}
          dataField="login"
          type="server"
        ></Node>
      )}
    </div>
  );
}

export default Home;
