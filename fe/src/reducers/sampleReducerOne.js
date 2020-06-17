import { ADD_MEMBER } from '';

const initialState = {
  members: [
    {  },
    {  }
  ]
};

export const sampleReducerOne = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_MEMBER:
      const newMember = {
        name: action.payload,
        dragonStatus: false
      };
      return {
        ...state,
        members: [...state.members, newMember]
      };
    default:
      return state;
  }
};
