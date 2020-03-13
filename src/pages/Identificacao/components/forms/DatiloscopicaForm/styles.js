import styled from 'styled-components';

export const Content = styled.div`
  .row-1 {
    width: 100%;
    display: flex;
  }
  .row-2 {
    width: 100%;
    max-width: 1000px;
    display: flex;
    margin-top: 10px;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 750px;
    flex-wrap: wrap;
  }

  .col-line {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ccc;
    margin-left: 20px;
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

  .row-line {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }

  .col-3 {
    display: flex;
    flex-wrap: wrap;
    .MuiOutlinedInput-root {
      margin-left: 10px;

      width: 270px;
    }
  }
`;
