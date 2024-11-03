const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        openDialog: true,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        openDialog: false,
      };

    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "UPDATE_ALERT":
      return {
        ...state,
        alert: action.payload,
      };

    case "UPDATE_PROFILE":
      return { ...state, profile: action.payload };

    case "UPDATE_USER":
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    case "UPDATE_MODE":
      localStorage.setItem("mode", action.payload);
      return {
        ...state,
        mode: action.payload,
      };
    case "VIEW_STUDENT":
      return {
        ...state,
        viewStudent: action.payload,
      };
    case "UPDATE_USERS":
      return { ...state, users: action.payload };
    case "UPDATE_STUDENTS":
      return { ...state, students: action.payload };
    case "UPDATE_ROW":
      return { ...state, editRow: action.payload };
    case "DELETE_DIALOG":
      return { ...state, deleteDialog: action.payload };
    case "EDIT":
      return { ...state, edit: action.payload };

    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
