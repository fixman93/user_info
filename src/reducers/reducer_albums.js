import _ from 'lodash'
import { FETCH_ALBUMS } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return _.mapKeys(action.payload.data, 'id')
    default:
     return state
  }
}
