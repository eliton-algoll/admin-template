import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 60px;
  width: 100%;
  background-image: repeating-linear-gradient(#19882c, #0a5517);
  box-shadow: 0px 1px 6px #00000029;
  z-index: 1000;

  .user-avatar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    span {
      font-size: 14px;
      padding-right: 10px;
      font-weight: 500;
      color: #fff;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      border: 2px solid #0a5522;
      flex: 1;
      cursor: pointer;
    }
  }
  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 48px;
    height: 56px;
    cursor: pointer;
  }

  .logo strong {
    color: #fff;
    padding-left: 10px;
    font-size: 18px;
    cursor: pointer;
  }

  .logo small {
    color: #ccc;
    font-size: 12px;
    padding: 0 10px;
  }
`;
