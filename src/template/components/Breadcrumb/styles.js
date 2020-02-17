import styled from 'styled-components';

export const Breadcrumbs = styled.div`
  height: 60px;
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
  box-shadow: 0 1px 2px -2px gray;
  margin-left: 10px;

  ul {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style: none;
    display: flex;
    color: #303030;

    li {
      padding-right: 10px;
    }

    svg {
      width: 40px;
      height: 40px;
      color: #9d9d9d;
    }
  }
`;
