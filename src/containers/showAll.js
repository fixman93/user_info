import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'
import ShowAlbums from './showAlbums'

class ShowAll extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <li className="list-group-item" key={user.id}>
          {user.name}
        </li>
      )
    })
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <div className="col-sm-4 show-all-users">
          <h3>Users</h3>
          <ul>
            {this.renderUsers()}
          </ul>
        </div>
        <div className="col-sm-8 showAlbums">
          <ShowAlbums />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers: fetchUsers})(ShowAll) // in ES6 write fetchUsers: fetchUsers --> fetchUsers
