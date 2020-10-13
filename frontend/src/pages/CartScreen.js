import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

// we need match to get the url,
// location to get the quantity and a query string
// history used to redirect
const CartScreen = ({ match, location, history }) => {
  // Getting our product ID from the URL
  const productId = match.params.id

  // Get the url with quantity => ?qty=1
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  // console.log(qty)

  const dispatch = useDispatch()

  // The store is now initialized, we can also get those items and put them in our cart with useSelector
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cart)
  console.log(cartItems)

  // dispatch add to cart if there is a product id
  // => IF we have an id and quantity, that is going to get added to our card
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      <h1>cart</h1>
    </div>
  )
}

export default CartScreen
