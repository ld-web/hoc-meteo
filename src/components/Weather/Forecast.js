import React, { Component } from "react";
import Loader from "../Utils/Loader";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const city = this.props.match.params.city;
    console.log(city);
  }

  render = () => {
    const city = this.props.match.params.city;
    // On peut rendre un contenu JSX dans une constante ou une variable
    // Ici, de manière conditionnelle car je souhaite afficher mon titre H1 tout le temps
    const loader = this.state.loading ? <Loader /> : "";

    return (
      <div className="container">
        <div className="row border-bottom mt-3 mb-4">
          <div className="col">
            <h1>{city} : Prévisions sur 5 jours</h1>
          </div>
        </div>
        {loader}
      </div>
    );
  };
}

export default Forecast;
