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

const fetchDataFailure = () => {
    return {
        type: types.FETCH_DATA_FAILURE,

    }
}

const fetchData = (params) => (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get(`http://localhost:8080/products`, params)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        // This response(r) object contains various properties including the data property, which holds the response data returned from the server.
        .catch((e) => dispatch(fetchDataFailure(e.data)))
};

const getSingleProductRequest = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,

    }
}

const getSingleProductSuccess = (payload) => {
    console.log('success get single prdt',payload)
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
    return {
        type: types.ADD_PRODUCT_CART_REQUEST,

    }
}

const addProductCartSuccess = (payload) => {
    console.log('add to cart success single prdct',payload)
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

// prod is a parameter representing the product that you want to add to the cart
const addProductCart = (prod) => (dispatch) => {
    dispatch(addProductCartRequest());
    axios.post(`http://localhost:8080/cart`, prod)
        .then(r => dispatch(addProductCartSuccess(r.data)))
        .catch(e => dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest = () => {
    return {
        type: types.FETCH_CART_REQUEST,

    }
}

const fetchCartSuccess = (payload) => {
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

const fetchCart = (payload) => (dispatch) => {
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

const deleteProductCart = (id) => (dispatch) => {
    console.log('del prct cart function ',id)
    dispatch(deleteProductCartRequest())
    axios.delete(`http://localhost:8080/cart/${id}`)
        .then((r) => {
            dispatch(deleteProductCartSuccess(r.data))
        })
        .then(() => dispatch(fetchCart()))
        .catch((e) => dispatch(deleteProductCartFailure(e.data)))
}

const addOrderRequest = () => {
    return {
        type: types.ADD_ORDER_REQUEST
    }
}

const addOrderSuccess = (payload) => {
    console.log('success add order',payload)
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload,
    }
}

const addOrderFailure = (payload) => {
    return {
        type: types.ADD_ORDER_FAILURE,
        payload,
    }
}

const addOrder = (payload) => (dispatch) => {
    console.log('function add order',payload)
    dispatch(addOrderRequest());

    axios.post(`http://localhost:8080/orders`, payload)
        .then(response => {
            dispatch(addOrderSuccess(response.data));
        })
        .then(() => dispatch(emptyCart(payload)))
        .catch(error => {
            dispatch(addOrderFailure(error));
        });
}

const emptyCartRequest = () => {
    return {
        type: types.EMPTY_CART_REQUEST
    }
}

const emptyCartSuccess = () => {
    return {
        type: types.EMPTY_CART_SUCCESS
    }
}

const emptyCartFailure = () => {
    return {
        type: types.EMPTY_CART_FAILURE
    }
}

// const emptyCart = (payload) => (dispatch) => {
//     console.log('function empty cart',payload)
//     dispatch(emptyCartRequest());
//     const deleteOrders = [];
//     for (let obj of payload) {
//         let temp = dispatch(deleteProductCart(obj.id));
//         deleteOrders.push(temp)
//     }
//     Promise.all(deleteOrders)
//         .then((r) => dispatch(emptyCartSuccess()))
//         .catch((e) => dispatch(emptyCartFailure()))
// }

const emptyCart = (payload) => async (dispatch) => {
    console.log('function empty cart', payload);
    dispatch(emptyCartRequest());
    const{id}=payload;
    dispatch(deleteProductCart(id))

};


const fetchOrderRequest = () => {
    return {
        type: types.FETCH_ORDER_REQUEST,

    }
}

const fetchOrderSuccess = (payload) => {
    console.log('fetch order success',payload)
    return {
        type: types.FETCH_ORDER_SUCCESS,
        payload,
    }
}

const fetchOrderFailure = () => {
    return {
        type: types.FETCH_ORDER_FAILURE,

    }
}

const fetchOrder = () => (dispatch) => {
    dispatch(fetchOrderRequest());
    axios.get(`http://localhost:8080/orders`)
        .then(r => dispatch(fetchOrderSuccess(r.data)))
        .catch(e => dispatch(fetchOrderFailure(e.data)))

}

const deleteOrderRequest = () => {
    return {
        type: types.DELETE_ORDER_REQUEST,

    }
}

const deleteOrderSuccess = (payload) => {
    return {
        type: types.DELETE_ORDER_SUCCESS,
        payload,
    }
}

const deleteOrderFailure = () => {
    return {
        type: types.DELETE_ORDER_FAILURE,

    }
}

const deleteOrderProducts = (id) => (dispatch) => {
    console.log('del order',id)
    dispatch(deleteOrderRequest())
    axios.delete(`http://localhost:8080/orders/${id}`)
    .then((res)=>{
        dispatch(deleteOrderSuccess(res.data))
          dispatch(fetchOrder());
})
  
    .catch(err =>dispatch(deleteOrderFailure(err.data)))
   
}


const AddProductsRequest = () => {
    return {
        type: types.ADD_PRODUCT_REQUEST
    }
}
const AddProductsSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_SUCCESS,
        payload,
    }
}
const AddProductsFailure = () => {
    return {
        type: types.ADD_PRODUCT_FAILURE
    }
}

const addProducts = (data) => (dispatch) => {
    dispatch(AddProductsRequest());
    axios.post(`http://localhost:8080/products`, data)
        .then(r => dispatch(AddProductsSuccess(r.data)))
        .catch(e => dispatch(AddProductsFailure(e.data)))

}

const EditProductsRequest = () => {
    return {
        type: types.EDIT_PRODUCT_REQUEST
    }
}
const EditProductsSuccess = (payload) => {
    return {
        type: types.EDIT_PRODUCT_SUCCESS,
        payload,
    }
}
const EditProductsFailure = () => {
    return {
        type: types.EDIT_PRODUCT_FAILURE
    }
}

const editProducts = (id, data) => (dispatch) => {

    dispatch(EditProductsRequest());
    axios.put(`http://localhost:8080/products/${id}`, data)
        .then(r => dispatch(EditProductsSuccess(r.data)))
        .catch(e => dispatch(EditProductsFailure(e.data)))

}

const DeleteProductsRequest = () => {
    return {
        type: types.DELETE_PRODUCT_REQUEST
    }
}
const DeleteProductsSuccess = (payload) => {
    return {
        type: types.DELETE_PRODUCT_SUCCESS,
        payload,
    }
}
const DeleteProductsFailure = () => {
    return {
        type: types.DELETE_PRODUCT_FAILURE
    }
}

const deleteProducts = (id) => (dispatch) => {
    dispatch(DeleteProductsRequest())
    axios.delete(`http://localhost:8080/products/${id}`)
        .then((r) => {
            dispatch(DeleteProductsSuccess(r.data))
            dispatch(fetchData());
        })
        .then(() => dispatch(fetchCart()))
        .catch((e) => dispatch(DeleteProductsFailure(e.data)))
}


export { fetchData,deleteOrderProducts, editProducts, deleteProducts, emptyCart, fetchOrder, getSingleProduct, addProductCart, fetchCart, deleteProductCart, addOrder, addProducts };
