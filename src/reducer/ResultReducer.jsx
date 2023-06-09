export const ResultReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        distinctOperatorsWithoutQuote:
          action.payload.distinctOperatorsWithoutQuote,
        totalOperatorsWithoutQuote: action.payload.totalOperatorsWithoutQuote,
        stringGetter: action.payload.stringGetter,
        distinctOperandsWithoutString:
          action.payload.distinctOperandsWithoutString,
        totalOperandsWithoutString: action.payload.totalOperandsWithoutString,
        filename: action.payload.filename,
      };
    case "clear":
      return {
        distinctOperatorsWithoutQuote: [],
        totalOperatorsWithoutQuote: [],
        stringGetter: [],
        distinctOperandsWithoutString: [],
        totalOperandsWithoutString: [],
        filename: "",
      };
    default:
      throw new Error();
  }
};
