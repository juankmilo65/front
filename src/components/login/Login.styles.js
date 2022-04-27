import styled from 'styled-components';
import logo from '../../images/denario-icon.png';

const WrapperLogin = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to right, #4C2C89, #2a0845);
`
const ContainerLogin = styled.div`
    display:flex;
    justify-content: center;
    text-align: center;
    align-content: space-around;
    padding-top: 8%;
`

const WrapperContentLogin = styled.div`
    background: white;
    border-radius: 0 30px 30px 0;
    padding-top: 4%;
    padding-right: 2%;
    width: 26%;
`

const WrapperLogo = styled.div`
    background: linear-gradient(to right,#2a0845,#59359D);
    border-radius: 30px 0 0 30px;
`

const Logo = styled.img.attrs({
    src: `${logo}`
  })`
    width: 26%;
    margin-top: 9%;
  `;

export {WrapperLogin, ContainerLogin, Logo, WrapperContentLogin, WrapperLogo}