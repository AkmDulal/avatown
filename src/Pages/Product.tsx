import { useState, useEffect } from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import { Checkbox, Tooltip, Pagination } from 'antd';
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line, RiStarSFill, RiHeartLine } from "react-icons/ri";
import { CiSaveUp2 } from "react-icons/ci";
import Ellipse from "../assets/images/Ellipse.png"
import data from "../data.json"
import { getDataStart } from '../ReduxService/Slice/Product';
import { cartActions } from '../ReduxService/Slice/CartSlice';
function Product() {

    const productList = useSelector((state: any) => state.product.data);
    const dispatch = useDispatch();

    console.log(productList, "productList productList");


    const fetchApiData: any = createAsyncThunk('api/fetchApiData', async () => {
        const alldata: any[] = data.products
        dispatch(getDataStart(alldata))
    });

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 12;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const itemsToDisplay = productList.slice(firstIndex, lastIndex);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Add to cart 
    function onAddToCart(product: any) {
        dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
    }
  
    useEffect(() => {
        dispatch(fetchApiData());
    }, [dispatch]);

    return (
        <div className='container-fluid'>
            <Row>
                <Col lg={2}>
                    <div className='item__list'>
                        <h3>Category </h3>
                        <div className='item_catagori_list'>
                            <ul>
                                <li> <Link to="/">Full avatar</Link> </li>
                                <li> <Link to="/">Others</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='item__list'>
                        <h3>Contents </h3>
                        <div className='item_catagori_list'>
                            <Checkbox.Group className='custom-checkbox' style={{ width: '100%' }}>
                                <ul>
                                    <li> <Checkbox value="1">VRChat(Quest)</Checkbox> </li>
                                    <li> <Checkbox value="2">VRChat(PCVR)</Checkbox> </li>
                                    <li> <Checkbox value="3">Others</Checkbox> </li>
                                </ul>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className='item__list'>
                        <h3>Price </h3>
                        <div className='item_catagori_list'>
                            <Checkbox.Group className='custom-checkbox' style={{ width: '100%' }}>
                                <ul>
                                    <li> <Checkbox value="1">Under $10</Checkbox> </li>
                                    <li> <Checkbox value="2">$10 to $20</Checkbox> </li>
                                    <li> <Checkbox value="3">$20 to $30</Checkbox> </li>
                                    <li> <Checkbox value="4">$70 & above</Checkbox> </li>
                                </ul>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className='item__list'>
                        <h3>Polygon amount </h3>
                        <div className='item_catagori_list'>
                            <Checkbox.Group className='custom-checkbox' style={{ width: '100%' }}>
                                <ul>
                                    <li> <Checkbox value="1">Under △7,500</Checkbox> </li>
                                    <li> <Checkbox value="2">△7,500 to △10,000</Checkbox> </li>
                                    <li> <Checkbox value="3">△10,000 to △15,000</Checkbox> </li>
                                    <li> <Checkbox value="4">△15,000 to △20,000</Checkbox> </li>
                                    <li> <Checkbox value="5">△20,000 to △32,000</Checkbox> </li>
                                    <li> <Checkbox value="6">△32,000 to △70,000</Checkbox> </li>
                                    <li> <Checkbox value="7">△70,000 & Above</Checkbox> </li>
                                </ul>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className='item__list'>
                        <h3>Auto upload support </h3>
                        <div className='item_catagori_list'>
                            <Checkbox.Group className='custom-checkbox' style={{ width: '100%' }}>
                                <ul>
                                    <li> <Checkbox value="1">Supported</Checkbox> </li>
                                    <li> <Checkbox value="2">Unsupported</Checkbox> </li>
                                </ul>
                            </Checkbox.Group>
                        </div>
                    </div>
                </Col>
                <Col lg={10} >
                    <Row>
                        {itemsToDisplay?.map((item: any, i: any) =>
                            <Col key={i} lg={3} className="d-flex align-items-stretch mt-3">
                                <div className='card'>
                                    <div className='product__images__area'>
                                        <Link to={`/product-details/${item?.id}`}>
                                            <img src={item.images} alt="product images" />
                                        </Link>
                                        <button onClick={() => onAddToCart(item)}> <RiShoppingCart2Line /> <span> Add</span>  </button>
                                    </div>
                                    <div className='product__contant'>
                                        <h4> {item.title} </h4>
                                        <div className='box'>
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <RiStarSFill />
                                            <h5> 4.7 & 100Likes </h5>
                                            <div className='wishlist'>
                                                <RiHeartLine />
                                            </div>
                                        </div>
                                        <div className='box '>
                                            <img className='box__img' src={Ellipse} alt="images" />
                                            <span> Avatar Joe’s </span>
                                        </div>
                                        <div className='price_box'>
                                            <h6>$ </h6>
                                            <span> {item?.price.toFixed(2)} </span>
                                        </div>
                                        <div className='box'>
                                            <div className='pc'></div>
                                            <span> PC Only </span>
                                        </div>
                                        <div className='text'>
                                            <p> {item?.description} </p>
                                            <Tooltip title="Copy Link" placement="top">
                                                <CiSaveUp2 />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                    <div className='paginashon__area'>
                        <Pagination current={currentPage}
                            pageSize={itemsPerPage}
                            total={productList.length}
                            onChange={handlePageChange} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Product