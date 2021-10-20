import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import TreeMap from "../data/TreeMap";
function Node(props) {
  let [data, setData] = useState(null);
  let [treeMap, setTreeMap] = useState(TreeMap(props.level, props.data));
  let [expanded, setExpanded] = useState(props.isExpanded);

  useEffect(()=>{
    setTreeMap(TreeMap(props.level, props.data))
    setExpanded(false);
  },[props.data, props.level])
  const expand = () => {
    fetch(treeMap.fetchURL).then((result) => {
      result.json().then((data) => {
        setData(data);
      });
    });
    setExpanded(!expanded);
  };
  return (
    <div>
      <div>
        <div className="container text-start mt-1">
          <div className="row">
            <div className="col-md-1">
              {props.type === "file" && (
                <div className="btn">
                  <i
                    className={
                      "fa fa-circle fa-2x " + props.type + "-color"
                    }
                    aria-hidden="true"
                  ></i>
                </div>
              )}
              {props.type !== "file" && (
                <button className="btn" onClick={expand}>
                  {expanded ? (
                    <i
                      className={
                        "fa fa-minus-circle fa-2x " + props.type + "-color"
                      }
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i
                      className={
                        "fa fa-plus-circle fa-2x " + props.type + "-color"
                      }
                      aria-hidden="true"
                    ></i>
                  )}
                </button>
              )}
            </div>
            <div className="col-md-11 mt-2">{props.data[props.dataField]}</div>

            <div></div>
          </div>
          {expanded &&
            data &&
            data.map((item) => {
              return (
                <Node
                  isExpanded={false}
                  level={props.level + 1}
                  type={treeMap.type}
                  dataField={treeMap.dataField}
                  data={item}
                ></Node>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Node;
