import Node from './Node';
import {useState, useEffect} from 'react';

function Home() {
  let [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/johnsjohn`).then((result)=>{
      result.json().then((data)=>{
        console.log(data);
        setData(data);
      })
    });
  }, []);
  return (
    <div className="mt-5">
      { data&&
        <Node dataSource={data} type="server" dataField="login" isExpanded={false}></Node>
      }
    </div>
  );
}

export default Home;
