import React from "react";

class AboutCardClass extends React.Component {
  constructor(props) {
    super(props);

    //in class component state has largeobject we can add state variable in object

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="Card">
        <h1>Count:{count}</h1>

        {/* we never change state variable directly in class component */}

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >+</button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>Umang97</h2>
      </div>
    );
  }
}

export default AboutCardClass;
