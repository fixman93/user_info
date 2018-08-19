import axios from 'axios'

export const FETCH_USERS = 'fetch_users'

const ROOT_URL = 'http://jsonplaceholder.typicode.com'
export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`)
  return {
    type: FETCH_USERS,
    payload: request
  }
}
