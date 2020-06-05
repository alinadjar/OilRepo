import { DATA_LOAD, DataTypes } from "../Actions/types";

const initialData = {
    [DataTypes.PRODUCTS] : [],
    [DataTypes.CATEGORIES] : []
}

const ShopReducer = (storeData = initialData, action) => {
    switch (action.type) {
        case DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        default:
            return storeData || {};
    }
}

export default ShopReducer;