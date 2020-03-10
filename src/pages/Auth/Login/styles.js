import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-90deg, #19882c, #0a5517);
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
  }
  form {
    margin-top: 20px;
    width: 100%;
    max-width: 300px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
    }

    button {
      width: 100%;
      background: #3b9eff;
      margin-top: 15px;
    }

    label {
      color: #fff;
    }

    .MuiInputLabel-outlined,
    .Mui-focused,
    .Mui-focused fieldset {
      color: #fff;
    }

    .MuiInput-underline:after {
      border-bottom-color: #fff;
    }

    .MuiFormHelperText-root.Mui-error {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
