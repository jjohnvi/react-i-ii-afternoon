import React, { Component } from "react";
import data from "./data";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: data,
      count: 0
    };
  }

  handleClick() {
    this.setState({
      count:
        this.state.count !== this.state.userInfo.length - 1
          ? this.state.count + 1
          : 0
    });
  }
  handlePrevious() {
    this.setState({
      count:
        this.state.count > 0
          ? this.state.count - 1
          : this.state.userInfo.length - 1
    });
  }

  render() {
    let { userInfo, count } = this.state;

    return (
      <div className="main-container">
        <div className="person-display">
          <h1 className="count">{[count + 1]}/25</h1>
          <section className="general">
            <h1 className="fullname">
              {userInfo[count].name.first} {userInfo[count].name.last}
            </h1>
            <p className="general__info">
              From: {userInfo[count].city}, {userInfo[count].country}
            </p>
            <p className="general__info">Job Title: {userInfo[count].title}</p>
            <p className="general__info">
              Employer: {userInfo[count].employer}
            </p>
          </section>
          <br />
          <p className="favorite">
            <h3>Favorite Movies:</h3>
            <p className="favorite__movies">
              1. {userInfo[count].favoriteMovies[0]}
            </p>
            <p className="favorite__movies">
              2. {userInfo[count].favoriteMovies[1]}
            </p>
            <p className="favorite__movies">
              3. {userInfo[count].favoriteMovies[2]}
            </p>
          </p>
          <div className="buttons">
            <button className="button" onClick={() => this.handlePrevious()}>
              Previous
            </button>
            <button className="button" onClick={() => this.handleClick()}>
              Next
            </button>
          </div>
        </div>
      </div>
    );

    // let viewUsers = userInfo.map((e, i) => {
    //   return <h1>{e.name.first}</h1>;
    // });

    // return <div>{viewUsers}</div>;
  }
}

export default Card;
