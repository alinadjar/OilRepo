
import {    
    WRITE_PRODUCTS_INTO_REPO
} from "../Actions/types";
import { loadingHide, loadingShow} from '../Actions/common';
import Axios from 'axios';


export const loadProductData = (serviceID, n, modelID) => {
    return (dispatch) => {


        dispatch(loadingShow());
// debugger
        var URL = `http://localhost:65494/api/v1/products/service/${serviceID}/topN/${n}/model/${modelID}`;
        if (!modelID || modelID === 0) {
            URL = `http://localhost:65494/api/v1/products/service/${serviceID}/topN/${n}`;
        }

        const request = Axios.request({
            method: 'GET',
            url: URL
        }).then(response => {
            console.log(response.data);
            return response.data;
        }).catch(e => {
            console.log(e);
        }).finally(
            () => dispatch(loadingHide())
        );


        

        const response = dispatch({
            type: WRITE_PRODUCTS_INTO_REPO,
            payload: request
        });

        response.then(() => {
            setTimeout(() => {
                dispatch(loadingHide());
            }, 500);
        });

    }
}