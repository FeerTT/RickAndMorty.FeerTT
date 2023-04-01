import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions";
import store from "./store";


const initialState = {
    myFavorites: [],
    allCharacters:[],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_FAV:
        return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
        };
    case REMOVE_FAV:
        return {
        ...state,
        myFavorites: state.allCharacters.filter(favorite => favorite.id !== parseInt(action.payload)),
        allCharacters: state.allCharacters.filter(favorite => favorite.id !== parseInt(action.payload)),
        };
    case FILTER:
        let copyAllCharacters = state.allCharacters.filter(filtro => filtro.gender === (action.payload));
    return{
        ...state,
        myFavorites:copyAllCharacters,
        };
    case ORDER:
        let copiaAllCharacters = state.allCharacters.sort((a,b) =>{
            if (a.id > b.id){
                return "Ascendente" === action.payload ? 1 : -1;
            };
            if (a.id < b.id){
                return "Descentente" === action.payload ? 1 : -1;
            };
            return 0;
        })
        return{
        ...state,
        myFavorites:copiaAllCharacters,
        }
    default:
        return state;
    }
};

export default reducer;
