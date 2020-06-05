import {
    toggleLOADING, showBasketSidePanel, SET_TXT_4_TOAST,
    SET_CURRENT_CATEGORY, SET_CURRENT_MODEL,
    Show_Filtering_Panel, Show_Sorting_Panel
} from '../Actions/types';



const initialState = {
    loading: false,
    showBasketPanel: false,
    myToastText: null,
    currentModel: -1,
    currentCategory: -1,
    showPanelFiltering: false,
    showPanelSorting: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case toggleLOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case showBasketSidePanel:
            return {
                ...state,
                showBasketPanel: !state.showBasketPanel
            }
        case Show_Filtering_Panel:
            return {
                ...state,
                showPanelFiltering: !state.showPanelFiltering
            }
        case Show_Sorting_Panel:
            return {
                ...state,
                showPanelSorting: !state.showPanelSorting
            }
        case SET_TXT_4_TOAST:
            return {
                ...state,
                myToastText: action.payload
            }
        case SET_CURRENT_MODEL:
            return {
                ...state,
                currentModel: action.payload
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state;
    }
}