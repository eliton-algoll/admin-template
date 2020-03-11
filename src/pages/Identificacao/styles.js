import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 20px;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;
  /*border-bottom: 1px solid rgba(189, 189, 189, 1);*/

  h1 {
    font-size: 16px;
    margin-right: 5px;
    color: #404040;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: #73879c;
    margin-right: 15px;
  }
`;
