export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function receiveAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}