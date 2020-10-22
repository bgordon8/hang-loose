const initialState = {
  authenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth_user':
      return {
        authenticated: true,
      }

    default:
      return state
  }
}
