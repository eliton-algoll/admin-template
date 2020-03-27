import styled from 'styled-components';

export const Content = styled.div`
  .row-1 {
    width: 100%;
    display: flex;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    flex-wrap: wrap;

    .MuiOutlinedInput-root {
      margin-right: 10px;
      width: 200px;
    }

    .row-dedos {
      display: flex;
    }

    img {
      width: 120px;
    }
  }
  .formula {
    display: flex;
    align-self: center;
    margin-top: 30px;
  }
  .assinatura {
    display: flex;
    align-self: center;
    margin-top: 30px;
    width: 420px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;

    img {
      flex: 1;
    }
  }

  .dedo-digital {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .col-foto {
    img {
      width: 270px;
      margin-left: 30px;
    }
  }

  .row-2 {
    width: 100%;
    display: flex;
    margin-top: 10px;
  }

  .col-2 {
    margin-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .MuiOutlinedInput-root {
      margin-left: 10px;
      width: 230px;
    }
  }
`;
