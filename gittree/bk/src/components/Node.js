import {useState } from "react";
import 'font-awesome/css/font-awesome.min.css';


function Node(props) {
  let [data, setData] = useState(null);
  let [expanded, setExpanded] = useState(props.isExpanded);
  const expand = () => {
    if (!expanded && props.type === "server") {
      fetch(
        `https://api.github.com/users/${props.dataSource["login"]}/repos`
      ).then((result) => {
        result.json().then((data) => {
          setData(data);
        });
      });
    }
    if (!expanded && props.type === "repo") {
      fetch(
        `https://api.github.com/repos/${props.dataSource["owner"]["login"]}/${props.dataSource["name"]}/pulls`
      ).then((result) => {
        result.json().then((data) => {
          setData(data);
        });
      });
    }
    if (!expanded && props.type === "pull") {
      fetch(
        `https://api.github.com/repos/${props.dataSource["user"]["login"]}/${props.dataSource["head"]["repo"]["name"]}/pulls/${props.dataSource["number"]}/files`
      ).then((result) => {
        result.json().then((data) => {
          setData(data);
        });
      });
    }
    setExpanded(!expanded);
  };
  return (
    <div>
      <div>
        <div className="container text-start mt-1">
          <div className="row">
            <div className="col-md-1">
              <a className="btn" onClick={expand}>
                {expanded ? <i className={"fa fa-minus-circle fa-2x "+ props.type+"-color"} aria-hidden="true"></i>
                 : <i className={"fa fa-plus-circle fa-2x "+ props.type+"-color"} aria-hidden="true"></i>}
              </a>
            </div>
            <div className="col-md-11 mt-2">
            {props.dataSource[props.dataField]}
            </div>

            <div></div>
          </div>
          {props.type === "server" &&
            expanded &&
            data &&
            data.map((item) => {
              return (
                <Node
                  dataSource={item}
                  dataField="name"
                  type="repo"
                  isExpanded={false}
                ></Node>
              );
            })}
          {props.type === "repo" &&
            expanded &&
            data &&
            data.map((item) => {
              return (
                <Node
                  dataSource={item}
                  dataField="number"
                  type="pull"
                  isExpanded={false}
                ></Node>
              );
            })}
          {props.type === "pull" &&
            expanded &&
            data &&
            data.map((item) => {
              return (
                <Node
                  dataSource={item}
                  dataField="filename"
                  type="file"
                  isExpanded={false}
                ></Node>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Node;
