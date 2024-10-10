import React from "react";

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>TEXT</a>
      </li>
    );
  }
}

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
    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />;
    });

    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height}cm</p>
            <p>
              <a href={this.state.homeworld}>Homeworld</a>
            </p>
            <ul>{movies}</ul>
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
