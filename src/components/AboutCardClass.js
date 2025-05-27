import React from "react";
import UserContext from "../utills/UserContext";

class AboutCardClass extends React.Component {
  constructor(props) {
    super(props);

    //in class component state has large object we can add state variable in object

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/UmangDhandhukiya");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    // in class component there are use consumer method to consume context it is used one callback function

    return (
      <div className="flex flex-col justify-between items-center">
        {/* used UseContext here use name which is add value by provider*/}

        <UserContext.Consumer>
          {({ loggedInuser , name }) => (
            <h1 className="font-bold text-lg">{name}</h1>
          )}
        </UserContext.Consumer>

        <img src={avatar_url} />
        <h4>{name}</h4>
        <h6>{bio}</h6>
      </div>
    );
  }
}

export default AboutCardClass;
