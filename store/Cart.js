import React, { Dispatch, useContext, useReducer } from 'react'


const defaultState = {} 

const CartItemsContext = React.createContext(defaultState)
const CartDispatchContext = React.createContext((() => {}) )

const CartProvider = ({ children}) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}

function cartReducers(
  state,
  { item, type, quantity: qtyToAdd = 1 }
) {
  const existingCartItem = state[Object(item).id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        const quantity = Object(existingCartItem).quantity + qtyToAdd
        return {
          ...state,
          [Object(item).id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      return {
        ...state,
        [Object(item).id]: {
          ...item,
          quantity: qtyToAdd,
        },
      }
    }

    case 'remove': {
      if (existingCartItem == undefined) {
        return state
      }

      const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        return {
          ...state,
          [Object(item).id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      const newCartItems = { ...state }
      delete newCartItems[Object(item).id]
      return newCartItems
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

const getCartSubTotal = (sum, item) => {
  sum += Object(item).price * Object(item).quantity
  return sum
}
const getCartCount = (sum, item) => sum + Object(item).quantity


export const useCart = () => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  return {
    items,
    itemsById,
    count,
    subTotal,
  }
}
export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext)

  const addToCart = (product, quantity) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    })

  const removeFromCart = (product) =>
    dispatch({
      type: 'remove',
      item: product,
    })

  return {
    addToCart,
    removeFromCart,
  }
}

export default CartProvider