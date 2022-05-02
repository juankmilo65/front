import styled from 'styled-components';

const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 15px;

    .ant-btn-default {
      background: linear-gradient(to right, rgb(76, 44, 137), rgb(42, 8, 69));
      color: white;
    }
`

export {WrapperButtons}