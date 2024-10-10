import React from "react";

class Starwars extends React.Component {
    getNewCharacter() {
        console.log("getNewCharacter")
    }

  render() {
    return (
      <>
        <h1>Name</h1>
        <p>Height (cm)</p>
        <p>Homeworld</p>
        <ul>
          <li>Films</li>
          <li>Films</li>
        </ul>
        <button type="button" onClick={() => this.getNewCharacter()} className="btn">
          Generate New Character
        </button>
      </>
    );
  }
}

export default Starwars;
