import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const FETCH_ALBUMS = 'fetch_albums'

const ROOT_URL = 'http://jsonplaceholder.typicode.com'
export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`)
  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function fetchAlbums() {
  const request = axios.get(`${ROOT_URL}/albums`)
  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}
