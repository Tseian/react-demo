import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreator } from "./store"
import {
    HeaderWrapper, Logo,
    Nav, NavItem,
    NavSearch, Addition,
    SearchInfo, SeachInfoTitle,
    SearchInfoSwitch, SearchInfoItem,
    Button,
    SeachWrapper
} from './style'
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe6dd;</i>
                </NavItem>
                <NavItem className="right">登陆</NavItem>
                <SeachWrapper>

                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleOnFocus}
                            onBlur={props.handleOnBlur}
                        >
                        </NavSearch>

                    </CSSTransition>
                    <i className={props.focused ? "focused iconfont" : "iconfont"}>
                        &#xe638;
                            </i>
                    <SearchInfo>
                        <SeachInfoTitle>
                            搜一搜
                            <SearchInfoSwitch>
                                换一批
                           </SearchInfoSwitch>
                        </SeachInfoTitle>

                        <SearchInfoItem>
                        </SearchInfoItem>
                    </SearchInfo>
                </SeachWrapper>

            </Nav>
            <Addition>
                <Button className="writting">
                    <i className="iconfont">&#xe624;</i>
                    写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.get("header").get("focused")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus() {
            const action = actionCreator.getSearchInputOnfcusedAction();
            dispatch(action)
        },
        handleOnBlur() {
            const action = actionCreator.getSearchInputOnBlurAction();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)