import React, { Component } from 'react';
import PropTypes from 'prop-types'

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

class PokemonItem extends Component {
  state = {
    image: false
  }
  componentWillMount() {
    const { id = 0 } = this.props
    if (id) {
      fetch(`${API_URL}${id}/`)
        .then(response => {
          if (!response.ok) throw Error(response.status);
          return response.json()
        })
        .then(result => {
          this.setState({
            image: <img
              alt={result.name}
              src={result.sprites.front_default}
            />
          })
        })
        .catch(responseStatus => console.error('responseStatus', responseStatus))
    }
  }

  render() {
    const { image } = this.state
    return <div>
      {image}
    </div>
  }
};

PokemonItem.propType = {
  id: PropTypes.number.isRequired
}

export default PokemonItem;