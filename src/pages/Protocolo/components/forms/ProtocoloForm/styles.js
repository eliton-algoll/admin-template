import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

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
    justify-content: space-between;
  }
  .row-nomes {
    display: flex;
    justify-content: space-between;
  }

  .row-2 {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .row-identificacao {
    display: flex;
    justify-content: space-between;
  }

  .row-dados-protocolo {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    .dados-protocolo-1,
    .dados-protocolo-2 {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  .MuiFormControl-marginDense {
    margin-right: 10px;
  }
`;
