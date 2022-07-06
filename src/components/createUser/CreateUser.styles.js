import styled from 'styled-components';
import argentina from '../../images/argentinaFlag.png'
import colombia from '../../images/colombianFlag.png';
import ecuator from '../../images/ecuatorianFlag.png';
import mexico from '../../images/mexicanFlag.png';
import panama from '../../images/panamaFlag.png';
import spain from '../../images/spainFlag.png';
import usa from '../../images/usaFlag.png';
import venezuela from '../../images/venezuelanFlag.png';


const images = {
  argentina,
  colombia,
  ecuator,
  mexico,
  panama,
  spain,
  usa,
  venezuela
};

function getImageByKey(key) {
  return images[key]
}

const Flag = styled.img.attrs(props => ({
 src: getImageByKey(props.theme)
}))
`
  margin-bottom: 4px;
  width: 32%;
`;

const WrapperAcctionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: ${(props) => props.isRegister ? '-65%;' : '-39%'}; 
`;

export {Flag, WrapperAcctionButtons}