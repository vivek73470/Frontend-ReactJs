import axios from 'axios';
import * as types from './actionType';

const fetchDataRequest = () => {
    return {
        type: types.FETCH_DATA_REQUEST,

    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload,
    }
}

const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,

    }
}


const fetchData = (params) => (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get(`http://localhost:8080/products`, params
    )
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
};


const getSingleProductRequest = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,

    }
}

const getSingleProductSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload,
    }
}

const getSingleProductFailure = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,

    }
}

const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest())
    axios.get(`http://localhost:8080/products/${id}`)
        .then(r => dispatch(getSingleProductSuccess(r.data)))
        .catch(e => dispatch(getSingleProductFailure(e.data)))
}

const addProductCartRequest = () => {
    console.log("my request")
    return {
        type: types.ADD_PRODUCT_CART_REQUEST,

    }
}

const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload,
    }
}

const addProductCartFailure = () => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,

    }
}

const addProductCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest());
    axios.post(`http://localhost:8080/cart`, product)
        .then(r => dispatch(addProductCartSuccess(r.data)))
        .catch(e => dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest = () => {
    return {
        type: types.FETCH_CART_REQUEST,

    }
}

const fetchCartSuccess = (payload) => {
    console.log("pay",payload)
    return {
        type: types.FETCH_CART_SUCCESS,
        payload,
    }
}

const fetchCartFailure = () => {
    return {
        type: types.FETCH_CART_FAILURE,

    }
}

const fetchCart = (payload) => (dispatch)=>{
    dispatch(fetchCartRequest());
    axios.get(`http://localhost:8080/cart`)
    .then(r => dispatch(fetchCartSuccess(r.data)))
    .catch(e => dispatch(fetchCartFailure(e.data)))

}


const deleteProductCartRequest = () => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST,

    }
}

const deleteProductCartSuccess = (payload) => {
    console.log("pay",payload)
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload,
    }
}

const deleteProductCartFailure = () => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,

    }
}

const deleteProductCart =(id)=> (dispatch) =>{
    dispatch(deleteProductCartRequest())
    axios.delete(`http://localhost:8080/cart/${id}`)
    .then((r) => {
     dispatch(deleteProductCartSuccess(r.data))
 } )
 .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)))
}

export { fetchData, getSingleProduct, addProductCart,fetchCart,deleteProductCart };
