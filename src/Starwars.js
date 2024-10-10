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
    const randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height}cm</p>
            <p>
              <a href={this.state.homeworld}>Homeworld</a>
            </p>
            <ul>
              {this.state.films.map((film) => {
                return <li>{film}</li>;
              })}
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
