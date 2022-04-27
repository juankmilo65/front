import styled from 'styled-components';
import spain from '../../images/spainFlag.png';
import usa from '../../images/usaFlag.png';

const LanguagesWrapper = styled.div`
 display: flex;
 justify-content: space-evenly;
`
const SpanishFlag = styled.img.attrs({
 src: `${spain}`
})`
 width: 22%;
`;

const EnglishFlag = styled.img.attrs({
 src: `${usa}`
})`
 width: 22%;
`;

export {LanguagesWrapper, SpanishFlag, EnglishFlag}