import { useState } from "react";

const AboutCard = (props) => {

    const [count,setCount] = useState(0);

  return (
    <div className="Card">
      <h1>Count:{count}</h1>
      <button onClick={() => {
        setCount(count+1)
      }}>+</button>
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
      <h2>Umang97</h2>
    </div>
  );
};

export default AboutCard;
