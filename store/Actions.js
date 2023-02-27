export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_MODAL: 'ADD_MODAL'
}

export const addToCart = (product, cart) => {
    if(product.inStock === 0)
    return ({ type: "NOTIFY", payload: {error: 'This Product Is Out of stock.'} })

    const check = cart.every(item => {
        return item._id !== product._id 
    })

    if(!check)
    return ({ type: "NOTIFY", payload: {error: 'The product has been added to cart.'} })

    return ({ type: "ADD_CART", payload: [...cart, {...product, quantity: 1}] })

}

export const increaseCart = (data, id) => {
    const newData = [...data];
    newData.forEach(item => {
        if(item._id === id) item.quantity +=1
    })

    return ({ type: "ADD_CART", payload: newData })
}

export const decreaseCart = (data, id) => {
    const newData = [...data];
    newData.forEach(item => {
        if(item._id === id) item.quantity -=1
    })
    return ({ type: "ADD_CART", payload: newData })
}


export const deleteCart = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData })
}