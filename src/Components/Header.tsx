import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input, Badge, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Logo from "../assets/images/logo.png"
import { RiNotification3Line } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import Cart from "./Cart"
// RiNotification3Line
function Header() {
    
    return (
        <div className='container-fluid header__area'>
            {/* <Container> */}
            <Row>
                <Col md={2} lg={2}>
                    <div className='logo__area'>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                </Col>
                <Col md={10} lg={10}>
                    <div className='header__contant_right'>
                        <Link to="/"> Go to Marketpage </Link>
                        <div className='header__contant_search_box'>
                            <Input
                                placeholder="Search"
                                addonAfter={<SearchOutlined />}
                                className="custom-search-bar"
                            />
                            <Badge count={1}>
                                <Avatar shape="square" size="large" icon={<RiNotification3Line className="header_icon_svg" />} />
                            </Badge >
                            <div className='cart'>
                                <Cart />
                            </div>
                            <Badge className='avatar__pic'>
                                <Avatar shape="square" size="large" icon={<FcBusinessman className="header_icon_profile_svg" />} />
                            </Badge>
                        </div>


                    </div>
                </Col>
            </Row>
            {/* </Container> */}
        </div>
    )
}

export default Header