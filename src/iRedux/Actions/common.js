
import {
    toggleLOADING, showBasketSidePanel, SET_TXT_4_TOAST,
    SET_CURRENT_CATEGORY, SET_CURRENT_MODEL,
    Show_Filtering_Panel, Show_Sorting_Panel
} from './types';

export const toggleLoadingState = () => ({
    type: toggleLOADING
})

export const toggleBasketSidePanel = () => ({
    type: showBasketSidePanel
})

export const toggleFilteringSidePanel = () => ({
    type: Show_Filtering_Panel
})

export const toggleSortingSidePanel = () => ({
    type: Show_Sorting_Panel
})

export const setTextForToast = (text) => ({
    type: SET_TXT_4_TOAST,
    payload: text
})


export const setCurrentModel = (modelID) => ({
    type: SET_CURRENT_MODEL,
    payload: modelID
})


export const setCurrentCategory = (catID) => ({
    type: SET_CURRENT_CATEGORY,
    payload: catID
})