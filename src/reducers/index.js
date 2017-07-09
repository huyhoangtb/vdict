import {reducer as formReducer} from "redux-form";
// import {routerReducer} from "react-router-redux";

const User = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return {...state, name: action.name};
  }
return {...state, name: 'hoangnh'};
}

export default {
  user: User,
  form: formReducer,
};

