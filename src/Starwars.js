import React from "react";

class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }
  
  getNewCharacter() {
    console.log("getNewCharacter");
    this.setState({
      loadedCharacter: true,
      name: "Luke",
      height: 172,
      homeworld: "Tattooine",
      films: ["1", "2", "3"],
    });
  }

  render() {
    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height}cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <ul>
              <li>Films: {this.state.films}</li>
            </ul>
          </div>
        )}
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Generate New Character
        </button>
      </>
    );
  }
}

export default Starwars;
