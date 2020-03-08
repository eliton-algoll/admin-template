import styled from 'styled-components';

export const Content = styled.div`
  width: 400px;
  display: flex;

  form {
    display: flex;
    margin-top: 10px;
    width: 100%;
    flex-wrap: wrap;
  }

  .row {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .MuiFormControl-marginDense {
    margin-right: 10px;
  }

  .buttonSubmit {
    background-color: #3b9eff;
    margin-top: 15px;
  }
`;
