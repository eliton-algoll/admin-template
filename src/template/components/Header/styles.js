import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 70px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 6px #00000029;
  z-index: 1000;
  position: relative;

  .user-avatar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    span {
      font-size: 14px;
      padding-right: 10px;
      font-weight: 500;
      color: #7d7d7d;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      border: 2px solid #0f4f7b;
      flex: 1;
      cursor: pointer;
    }

    svg {
      width: 50px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .logo img {
    width: 48px;
    height: 56px;
  }

  .logo strong {
    color: #0f4f7b;
    padding-left: 10px;
    font-size: 18px;
  }
`;
