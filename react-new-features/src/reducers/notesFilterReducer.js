const notesFilterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'FILTER_BY_BODY':
      return {
        ...state,
        body: action.body,
      };
    default:
      return state;
  }
};

export { notesFilterReducer as default };
