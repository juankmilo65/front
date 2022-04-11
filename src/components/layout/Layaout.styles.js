import styled from 'styled-components';
import logo from '../../images/denario-icon.png';

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

export {
    Logo,
    Avatar
}