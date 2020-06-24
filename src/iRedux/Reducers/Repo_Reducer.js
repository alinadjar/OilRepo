import {
    DataTypes,
    WRITE_PRODUCTS_INTO_REPO
} from "../Actions/types";

const initialData = {
    [DataTypes.PRODUCTS]: {},
    [DataTypes.CATEGORIES]: [],    
}

const RepositoryReducer = (storeData = initialData, action) => {
    switch (action.type) {
        case WRITE_PRODUCTS_INTO_REPO:
            // debugger
            return {
                ...storeData,
                [DataTypes.PRODUCTS]: action.payload,                
            }

        default:
            return storeData || {};
    }
}

export default RepositoryReducer;