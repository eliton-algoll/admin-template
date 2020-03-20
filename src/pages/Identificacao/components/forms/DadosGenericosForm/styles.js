import styled from 'styled-components';

export const Content = styled.div`
  .row-1 {
    width: 100%;
    display: flex;
  }

  .col-1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* max-width: 1150px; */
    flex-wrap: wrap;
    .MuiOutlinedInput-root {
      margin-right: 10px;
      width: 230px;
    }
  }

  .row-line {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }
`;
