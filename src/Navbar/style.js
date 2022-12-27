import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Input = styled.input`
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  padding: 5px 5px;
  width: 200px;

  ::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    text-align: center;
    text-indent: 0;
  }
`;
