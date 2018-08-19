import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import AlbumsReducer from './reducer_albums'

const rootReducer = combineReducers({
  users: UsersReducer,
  albums: AlbumsReducer
});

export default rootReducer;
