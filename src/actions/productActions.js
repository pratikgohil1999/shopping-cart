import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => (dispatch) => {
    fetch("../db.json").then(res => res.json())
        .then(data => {
            return dispatch({ type: FETCH_PRODUCTS, payload: data.products });
        });
}