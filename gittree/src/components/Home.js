import Node from './Node';
import TreeMap from '../data/TreeMap';
import {useState, useEffect} from 'react';

function Home() {
  let [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/johnsjohn`).then((result)=>{
      result.json().then((data)=>{
        setData(data);
      })
    });
  }, []);
  return (
    <div className="mt-5">
      { data&&
        <Node isExpanded={false} data={data} level={0} dataField="login" type="server"></Node>
      }
    </div>
  );
}

export default Home;
