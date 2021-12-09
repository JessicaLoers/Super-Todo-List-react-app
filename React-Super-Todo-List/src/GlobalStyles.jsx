import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

:root {
  --primary: red;
}

body {
 background-color: blue;
}

`;
