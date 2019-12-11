import { initialState } from './selectors'
import * as actions from './actions'

interface Action {
  type: string
  payload: any
}

const formReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.SET_EMAIL: {
      return {
        ...state,
        email: payload.email,
      }
    }
      case actions.SET_USER_PROFILE: {
          return {
              ...state,
              firstName: payload.firstName,
              lastName: payload.lastName,
              gender: payload.value
          }
      }
      case actions.SET_COMPANY: {
          return {
              ...state,
              company: payload.company
          }
      }
      case actions.SET_TIMEZONE: {
          return {
              ...state,
              timezone: payload.value
          }
      }
    default: {
      return state
    }
  }
}

export default formReducer
