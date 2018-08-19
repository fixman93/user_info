import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/index'

class ShowAlbums extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    this.props.fetchAlbums()
  }

  // renderAlbums() {
  //   return _.map(this.props.albums, album => {
  //     return (
  //       <li className="list-group-item" key={album.id}>
  //         {album.title}
  //       </li>
  //     )
  //   })
  // }

  render() {
    const {
      albums
    } = this.state;
    console.log(this.props.albums)
    return (
      <div>
        <ul>
        {
          albums && albums.map((x, i) => {
            return (
              <li key={i} >
                {i.name}
              </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { albums: state.albums }
}

export default connect(mapStateToProps, { fetchAlbums: fetchAlbums})(ShowAlbums) // in ES6 write fetchUsers: fetchUsers --> fetchUsers
