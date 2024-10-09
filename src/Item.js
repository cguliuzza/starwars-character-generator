import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return (
      <>
        <h1 onClick={() => this.clickMe()}>Hello {this.props.name}</h1>
        <span>Likes: {this.state.clicks}</span>
      </>
    );
  }
}

export default Item;
