import styled from 'styled-components';

const RegisterTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5em;
  color: rgb(255 255 255 / 85%);
  font-weight: 500;
`;

const WrapperCrearUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  .ant-form {
    width: 40%;
    margin-top: 2%;
    margin-left: 14%;
    .footerButtoms{
      margin-left: -22%;
    }
  }
`;

export {RegisterTitle, WrapperCrearUser}