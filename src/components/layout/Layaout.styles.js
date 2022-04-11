import styled from 'styled-components';
import {Menu, PageHeader} from 'antd';
import logo from '../../images/denario-icon.png';

const WrapLayaout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Logo = styled.img.attrs({
  src: `${logo}`
})`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%; 
`;

const Avatar = styled.img.attrs({
  src: `${logo}`
})`
display: block;
margin-left: 14px;
width: 2%;
height: 50%;
margin-right: 14px;
margin-top: 14px;
`;

const WrapLayaoutContent = styled.div`
  width: 100%;
`;

const WrapperContent= styled.div`
  margin-left: 297px;
  margin-top: 110px;
`;


export {
    WrapLayaout,
    WrapLayaoutContent,
    WrapperContent,
    Logo,
    Avatar
}