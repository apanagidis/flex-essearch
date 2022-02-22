import styled from 'react-emotion';

export const ESSearch = styled('div')`
  padding: 10px;
  margin: 0px;
  background: #eeeeee;

  .sui-layout-body{
    background: #eeeeee;
  }

  .sui-layout-main{
    width:100%;
    padding: 0 0 0 0;
  }

  .sui-layout-body::after {
    background: #eeeeee;
  }
  
  .sui-layout-sidebar{
    width:0%;
    padding: 0 0 0 0;
  }
  
  .accented {
    color: red;
    cursor: pointer;
    float: right;
  }
`;
