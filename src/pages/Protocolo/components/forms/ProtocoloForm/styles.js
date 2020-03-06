import styled from 'styled-components';

import { darken } from 'polished';

export const Content = styled.div`
  width: 100%;

  text-align: center;
  display: flex;

  form {
    display: flex;
    margin-top: 10px;
    width: 100%;
    flex-wrap: wrap;
  }

  .imgIdentificacao {
    width: 250px;
  }

  .row-1 {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .row-idt {
    display: flex;
    flex-direction: row;
  }

  .MuiFormControl-marginDense {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #3b9eff;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
  }
`;
