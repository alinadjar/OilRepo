
import { DATA_LOAD } from "../Actions/types";
import { data as phData } from "../tempData";

export const loadData = (dataType) => ({
    type: DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});