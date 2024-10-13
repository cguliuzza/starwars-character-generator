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
      born: null,
      died: null,
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
          born: data.born,
          died: data.died,
          species: data.species,
          affiliations: Array.isArray(data.affiliations)
            ? data.affiliations
            : [],
          masters: Array.isArray(data.masters) ? data.masters : [],
          apprentices: Array.isArray(data.apprentices) ? data.apprentices : [],
        });
      });
  }

  render() {
    const affiliationsList = this.state.affiliations.map((affiliation, i) => {
      return <AffiliationsItemRow key={i} affiliation={affiliation} />;
    });
    const mastersList = this.state.masters.map((master, i) => {
      return <MastersItemRow key={i} master={master} />;
    });
    const apprenticesList = this.state.apprentices.map((apprentice, i) => {
      return <ApprenticesItemRow key={i} apprentice={apprentice} />;
    });

    return (
      <div className="card">
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Generate New Character
        </button>
        {this.state.loadedCharacter && (
          <div className="container">
            <img
              src={this.state.image}
              alt={`${this.state.name} from Starwars`}
            />
            <h1>{this.state.name}</h1>
            <p>Species: {this.state.species}</p>
            <p>Height: {this.state.height}cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            {this.state.born != null && <p>Born: {this.state.born}</p>}
            {this.state.died != null && <p>Died: {this.state.died}</p>}
            <p>Affiliations</p>
            <ul>{affiliationsList}</ul>
            {this.state.masters.length > 0 && (
              <>
                <p>Masters</p>
                <ul>{mastersList}</ul>
              </>
            )}
            {this.state.apprentices.length > 0 && (
              <>
                <p>Apprentices</p>
                <ul>{apprenticesList}</ul>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Starwars;
