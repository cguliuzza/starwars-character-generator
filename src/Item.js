import React from "react";

const clickMe = () => {
    console.log("I was clicked!")
}

class Item extends React.Component {
    render() {
      return (
        <h1 onClick={() => clickMe()}>Hello {this.props.name}</h1>
      )
    }
}

export default Item