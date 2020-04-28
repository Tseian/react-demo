import styled from 'styled-components';
import LogoPic from '../../statices/logo.png'

export const SeachWrapper = styled.div`
float:left;
position:relative;
.iconfont {
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    text-align:center;
    line-height:30px;
    border-radius:15px;
    &.focused {
        background:#777;
        color:#fff;
    }
}
.slide-enter {
    transition:all .2s ease-out;
}
.slide-enter-active {
    width:240px;
}
.slide-exit {
    transition:all .2s ease-out;
}

.slide-exit-active {
    width:160px;
}
`

/**
 *  SearchInfo, SeachInfoTitle,
    SearchInfoSwitch, SearchInfoItem,
 */

export const SearchInfo = styled.div`
 margin-top:20px;
 margin-bottom:15px;
 font-size:14px;
 color:#969696;
 `
export const SeachInfoTitle = styled.div`
 `
export const SearchInfoSwitch = styled.span`
 `
export const SearchInfoItem = styled.a`
 `

export const HeaderWrapper = styled.div`
height:56px;
border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: "/"
})`
height:58px;
position:absolute;
top:0;
left:0;
width:100px;
display:block;
background:url(${LogoPic});
background-size:contain;
`


export const Nav = styled.div`
width:960px;
height:100%;
margin:0 auto;
padding-sizing:border-box;
padding-right:70px;
`

export const NavItem = styled.div`
&.left {
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
padding: 0 15px;
font-size:17px;
line-height:56px;
color:#333;
`

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
width:160px;
color:#666;
height:38px;
padding:0 30px 0 20px;
font-size:14px;
border:1px solid #eee;
background:#eee;
border-radius:19px;
font-size:14px;
margin-top:9px;
margin-left:20px;
border:none;
outline:none;
box-sizing:border-box;
&::placeholder:{
    color:#999;
}
&.focused {
    width:250px;
}
`;

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;

export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg {
    color:#ec6149;
}
&.writting {
    color:#fff;
    background:#ec6149;
}
`