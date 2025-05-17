import React from "react";

class AboutCardClass extends React.Component {
  constructor(props) {
    super(props);

    //in class component state has large object we can add state variable in object

    this.state = {
      userInfo : {
        name : "dummy",
        location: "dummy"
      }
    };
  }

async componentDidMount(){ 
  const data = await fetch("https://api.github.com/users/UmangDhandhukiya");

  const json = await data.json()

  this.setState({
    userInfo:json,
  })
}

  render() {
    const { name, bio, avatar_url} = this.state.userInfo;

    return (
      <div className="Card">
        <img src={avatar_url}/>
        <h4>{name}</h4>
        <h6>{bio}</h6>
      </div>
    );
  }
}

export default AboutCardClass;
