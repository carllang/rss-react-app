import {
  injectGlobal
} from 'styled-components'

export default injectGlobal `
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: Arial, Helvetica, Helvetica Neue, serif;
    font-size: 100%;
    height: 100vh;
    margin: 0;
    overflow-y: hidden;
  }
  i{
    font-style: none;
  }
  a {
    text-decoration: none;
  }
  input:focus
  {
    outline:0;
  }
  button:focus
  {
    outline:0;
  }
  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    
    /* Browsers have different default form fonts */
    font-size:13px;
    font-family:Arial;
  }
  box-sizing: border-box;

`