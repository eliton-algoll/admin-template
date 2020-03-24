import styled from 'styled-components';

export const Content = styled.div`
  .row-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .certidao-extenso {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .MuiOutlinedInput-root {
      width: 100% !important;
      max-width: 1090px;
    }
  }

  .col-1 {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .MuiOutlinedInput-root {
      margin-right: 10px;
      width: 210px;
    }
  }
`;
