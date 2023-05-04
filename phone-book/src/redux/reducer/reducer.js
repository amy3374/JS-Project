let initialState = {
  contactList: [],
  keyword: "",
  deleteList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === "ADD_CONTACT") {
    return {
      ...state,
      contactList: [
        ...state.contactList,
        {
          name: payload.name,
          phoneNumber: payload.phoneNumber,
          id: payload.id,
        },
      ],
    };
  }
  if (type === "DELETE_CONTACT") {
    return {
      ...state,
      contactList: [
        ...state.contactList.filter((item) => item.id !== payload.id),
      ],
    };
  }
  if (type === "SEARCH_NAME") {
    state.keyword = payload.keyword;
  }
  return {
    ...state,
  };
}

export default reducer;
