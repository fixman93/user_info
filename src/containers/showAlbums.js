import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/index'

class ShowAlbums extends Component {
  componentDidMount() {
    this.props.fetchAlbums()
  }

  renderAlbums() {
    return _.map(this.props.albums, album => {
      return (
        <li className="list-group-item" key={album.id}>
          {album.id}. {album.title}
        </li>
      )
    })
  }

  render() {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // const filter = (...albums) => {
    //   return albums.filter(el => el.id === 2)
    // }
    // console.log(filter(this.props.albums))
    console.log(this.props.albums)
    return (
      <div>
        <h3>Albums</h3>
        <ul>{this.renderAlbums()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { albums: state.albums }
}

export default connect(mapStateToProps, { fetchAlbums: fetchAlbums})(ShowAlbums) // in ES6 write fetchUsers: fetchUsers --> fetchUsers
