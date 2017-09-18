import { FETCH_WEATHER } from '../actions/index';

// the action is the payload - except the promise is already resolved and processed
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // use concat instead of push - state must not be mutated!
    // concat returns a new array of all the old stuff from
    // state plus the new stuff - this is to accommodate
    // multiple search terms
    // return state.concat([action.payload.data]);

    // also possible to use the rest operator
    return [ action.payload.data, ...state ];
  }
  return state;
}
