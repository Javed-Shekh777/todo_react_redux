const initialState = {
    user_data: JSON.parse(localStorage.getItem("user_data")) || []
};



// localStorage.setItem("todos",JSON.stringify(initialState));


const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const updatedUserData = [...state.user_data, action.payload];
            localStorage.setItem("user_data", JSON.stringify(updatedUserData))

            return {
                ...state,
                user_data: updatedUserData,
            };
        case "REMOVE_DATA":
            const dlData = state.user_data.filter((_, k) => k !== action.payload);
            localStorage.setItem("user_data", JSON.stringify(dlData))

            return {
                ...state,
                user_data: dlData
            };

        case "UPDATE_DATA":
            const edit = state.user_data.map((item, i) => i === action.d ? action.payload : item);
            localStorage.setItem("user_data", JSON.stringify(edit))


            return {
                ...state,
                user_data: edit
            };
        default:
            return state;

    }

};

export default todoReducers;