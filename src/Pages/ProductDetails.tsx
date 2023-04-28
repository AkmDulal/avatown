import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Tabs } from 'antd';
import OwlCarousel from 'react-owl-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../ReduxService/Slice/CartSlice';
import { RiShoppingCart2Line, RiStarSFill, RiHeartLine } from "react-icons/ri";
import Ellipse from "../assets/images/Ellipse.png"

function ProductDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { TabPane } = Tabs;
    const [isTruncated, setIsTruncated] = useState(true);
    // const [count, setCount] = useState<number>(0);
    const productList = useSelector((state: any) => state.product.data);
    const qnty = useSelector((state: any) => state.cart.singleQuantity);
    console.log(qnty, "productList productList");

    const [ detailsData, setDetailsData] = useState<any>([])
    const baseUrl = window.location.origin;

    const options = {
        navText: ["Prev", "Next"],
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 4,
            },
            1366: {
                items: 6,
            },
        }
    };
   
    function incrementFun(data: any) {
        if (Number(detailsData.id) === Number(data?.id) ) { 
            const ddd = { ...detailsData, qnty: detailsData.qnty += 1 }
            setDetailsData(ddd)
        }
    }
    function dataDecriment(data: any) {
        if (Number(detailsData.id) === Number(data?.id) && detailsData?.qnty > 1 ) { 
            const ddd = { ...detailsData, qnty: detailsData.qnty - 1 }
            setDetailsData(ddd)
        }
    }

    function detailsDataGet() {
        const data = productList?.find((element: any) => element?.id === Number(id))
        const ddd = {...data, qnty: 1}
        setDetailsData(ddd)
        
    }

    function onAddToCart(product: any) {
        dispatch(cartActions.addItemToCart({ product: product, quantity: detailsData?.qnty }));
    }

    const text: any = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit ultrices, euismod odio a, tristique enim. Vestibulum eget purus quis nunc ullamcorper scelerisque sed id ex. Proin congue eros eget libero aliquam, quis pharetra ipsum luctus. Nam consectetur turpis at diam vestibulum, et placerat sapien gravida. Ut quis tincidunt eros. Curabitur bibendum metus ac tortor pulvinar, sit amet eleifend est rutrum. Duis pharetra neque vel dui accumsan, quis malesuada eros tincidunt. Nulla aliquam tincidunt mauris, quis tristique metus iaculis ac. Etiam faucibus auctor ex, quis consectetur enim finibus sit amet. Aliquam consequat justo vitae odio malesuada dapibus. Sed ut tincidunt enim. Quisque rhoncus fermentum turpis, id eleifend ipsum lacinia a. Sed vel dapibus purus. Aenean sit amet quam diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit ultrices, euismod odio a, tristique enim. Vestibulum eget purus quis nunc ullamcorper scelerisque sed id ex. Proin congue eros eget libero aliquam, quis pharetra ipsum luctus. Nam consectetur turpis at diam vestibulum, et placerat sapien gravida. Ut quis tincidunt eros. Curabitur bibendum metus ac tortor pulvinar, sit amet eleifend est rutrum. Duis pharetra neque vel dui accumsan, quis malesuada eros tincidunt. Nulla aliquam tincidunt mauris, quis tristique metus iaculis ac. Etiam faucibus auctor ex, quis consectetur enim finibus sit amet. Aliquam consequat justo vitae odio malesuada dapibus. Sed ut tincidunt enim. Quisque rhoncus fermentum turpis, id eleifend ipsum lacinia a. Sed vel dapibus purus. Aenean sit amet quam diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit ultrices, euismod odio a, tristique enim. Vestibulum eget purus quis nunc ullamcorper scelerisque sed id ex. Proin congue eros eget libero aliquam, quis pharetra ipsum luctus. Nam consectetur turpis at diam vestibulum, et placerat sapien gravida. Ut quis tincidunt eros. Curabitur bibendum metus ac tortor pulvinar, sit amet eleifend est rutrum. Duis pharetra neque vel dui accumsan, quis malesuada eros tincidunt. Nulla aliquam tincidunt mauris, quis tristique metus iaculis ac. Etiam faucibus auctor ex, quis consectetur enim finibus sit amet. Aliquam consequat justo vitae odio malesuada dapibus. Sed ut tincidunt enim. Quisque rhoncus fermentum turpis, id eleifend ipsum lacinia a. Sed vel dapibus purus. Aenean sit amet quam diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit ultrices, euismod odio a, tristique enim. Vestibulum eget purus quis nunc ullamcorper scelerisque sed id ex. Proin congue eros eget libero aliquam, quis pharetra ipsum luctus. Nam consectetur turpis at diam vestibulum, et placerat sapien gravida. Ut quis tincidunt eros. Curabitur bibendum metus ac tortor pulvinar, sit amet eleifend est rutrum. Duis pharetra neque vel dui accumsan, quis malesuada eros tincidunt. Nulla aliquam tincidunt mauris, quis tristique metus iaculis ac. Etiam faucibus auctor ex, quis consectetur enim finibus sit amet. Aliquam consequat justo vitae odio malesuada dapibus. Sed ut tincidunt enim. Quisque rhoncus fermentum turpis, id eleifend ipsum lacinia a. Sed vel dapibus purus. Aenean sit amet quam diam."
    const toggleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    };
    const displayText = isTruncated ? `${text.slice(0, 1200)}...` : text;

    useEffect(() => {
        detailsDataGet()
    }, [dispatch]);
    console.log(detailsData);
    
    return (
        <div className='container-fluid'>
            <Row>
                <Col lg={12}>
                    <div className='breadcrumb_box'>
                        <ul>
                            <li> <Link to="/"> Go to Marketpage </Link> </li> <span> / </span>
                            <li> <Link to="/" style={{ fontWeight: 600 }}> Product Details </Link> </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={2}>
                    <div className='deatils__images'>
                    <img src={`${baseUrl}/${detailsData.images}`} alt="product images" />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='product_Details__contant'>
                        <h3> Avatar name “Avatown” -nice original avatar of Avatown </h3>
                        <h6> by Peter Thiel (Author), Blake Masters (Author)  </h6>
                        <div className='box'>
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <h5> 4.7 & 100Likes </h5>
                        </div>
                        <Tabs>
                            <TabPane tab="Description" key="1">
                                <div className="contant__effect">
                                    <p>{displayText}</p>
                                    <button onClick={toggleIsTruncated}>

                                        {isTruncated ? "Read More" : "Read Less"}
                                        {isTruncated ? <> <div className="content_fade"></div></> : ""}
                                    </button>
                                </div>
                            </TabPane>
                            <TabPane tab="Additional info" key="2">
                                <div className="contant__effect">
                                    <p>{displayText}</p>
                                    <button onClick={toggleIsTruncated}>

                                        {isTruncated ? "Read More" : "Read Less"}
                                        {isTruncated ? <> <div className="content_fade"></div></> : ""}
                                    </button>
                                </div>
                            </TabPane>
                            <TabPane tab="Care Instuctions" key="3">
                                <div className="contant__effect">
                                    <p>{displayText}</p>
                                    <button onClick={toggleIsTruncated}>

                                        {isTruncated ? "Read More" : "Read Less"}
                                        {isTruncated ? <> <div className="content_fade"></div></> : ""}
                                    </button>
                                </div>
                            </TabPane>
                            <TabPane tab="Review" key="4">
                                <div className="contant__effect">
                                    <p>{displayText}</p>
                                    <button onClick={toggleIsTruncated}>

                                        {isTruncated ? "Read More" : "Read Less"}
                                        {isTruncated ? <> <div className="content_fade"></div></> : ""}
                                    </button>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>

                </Col>
                <Col lg={2}>
                    <div className='details_card__box'>
                        <h3>  Buy new:  <span> ${detailsData.price}</span> </h3>
                        <h4> {detailsData.title} </h4>
                        <h3> Availability : <span> In Stock  </span> </h3>
                        <h3> Deliver to  In  <span> Bangladesh  </span> </h3>
                        <div className="size_area">
                            <p>  Qnt :  </p>
                            <div className="price_qantity">
                                <button onClick={() =>dataDecriment(detailsData)}> - </button>
                                <input type="text" name="quantity" className="col bg-transparent border-0 text-center flex-grow-1 fs-16 input-number" value={detailsData.qnty}  />
                                <button onClick={() =>incrementFun(detailsData)} > + </button>
                            </div>
                        </div>
                        <button onClick={() => onAddToCart(detailsData)} className="add_btnn"> Add to Cart </button>
                        <button className="add_btnn"> Buy Now </button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <h3 className="product_Details__h3"> More items to explore </h3>
                    <div className='product_Details__contant'>
                        <OwlCarousel loop
                            margin={10}
                            nav={false}
                            dots={false}
                            autoplay={true}

                            autoplayTimeout={4000}
                            className="how_it_work_items owl-carousel"
                            {...options}>
                            {productList?.map((item: any, i: any) =>
                                <div key={i} className='item'>
                                    <div className='product__images__area'>
                                        <Link to="/product-details">
                                            <img src={`${baseUrl}/${item.images}`} alt="product images" />
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
                                        <div className='box'>
                                            <img className="box__img" src={Ellipse} alt="images" />
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
                                            {/* <Tooltip title="Copy Link" placement="top">
                                                <CiSaveUp2 />
                                            </Tooltip> */}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </OwlCarousel>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetails