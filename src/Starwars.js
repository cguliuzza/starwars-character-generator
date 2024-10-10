import React from "react";

class AffiliationsItemRow extends React.Component {
  render() {
    return <li>{this.props.affiliation}</li>;
  }
}
class MastersItemRow extends React.Component {
  render() {
    return <li>{this.props.master}</li>;
  }
}
class ApprenticesItemRow extends React.Component {
  render() {
    return <li>{this.props.apprentice}</li>;
  }
}

class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      image: null,
      height: null,
      homeworld: null,
      species: null,
      affiliations: [],
      masters: [],
      apprentices: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loadedCharacter: true,
          name: data.name,
          image: data.image,
          height: data.height,
          homeworld: data.homeworld,
          species: data.species,
          affiliations: data.affiliations,
          masters: data.masters,
          apprentices: data.apprentices,
        });
      });
  }

  render() {
    // const movies = this.state.films.map((url, i) => {
    //   return <FilmItemRow key={i} url={url} />;
    // });

    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <img src={this.state.image} />
            <h1>{this.state.name}</h1>
            <p>Species: {this.state.species}</p>
            <p>Height: {this.state.height}cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            {/* <ul>{movies}</ul> */}
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
