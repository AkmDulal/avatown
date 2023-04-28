import { useState } from 'react';
import { Badge, Avatar, Drawer } from 'antd';
import { RiShoppingCart2Line, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../ReduxService/Slice/CartSlice';
function Cart() {
    const [open, setOpen] = useState(false);
    const baseUrl = window.location.origin;
    const dispatch = useDispatch();
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const cartItemQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const cartItems = useSelector((state: any) => state.cart.items)
    const totalAmount = useSelector((state: any) => state.cart.totalAmount)
    console.log(cartItems, "cartItemQuantity cartItemQuantity");

    function decrement(id: any) {
        dispatch(cartActions.removeItemFromCart(id));
    }
    
    return (
        <div>
            <Badge count={cartItemQuantity} >
                <Avatar onClick={showDrawer} shape="square" size="large" icon={<RiShoppingCart2Line className="header_icon_svg" />} />
            </Badge>
            <Drawer title="Cart List" placement="right" onClose={onClose} open={open}>
                <div className='cart_wrap__area'>
                    <ul>
                        {cartItems.map((product: any) => (
                            <li key={product.id}>
                                <div className='shopping-cart-img'>
                                    <img src={ `${baseUrl}/${product.images}` } alt="okkk" />
                                </div>
                                <div className="shopping-cart-title">
                                    <h4><Link to="/"> {product.title} </Link></h4>
                                    <h4><span>1 × </span>${product.price}</h4>
                                </div>
                                <div className="shopping-cart-delete">
                                    <h4 onClick={() => decrement(product.id)}><RiCloseLine /></h4>
                                </div>
                            </li>
                        ))}
                        <div className='shopping-cart-footer'>
                            <div className='shopping-cart-total'>
                                <h4>Total <span>$ {totalAmount}</span></h4>

                            </div>
                        </div>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default Cart