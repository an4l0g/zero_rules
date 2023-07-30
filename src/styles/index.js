import styled, { createGlobalStyle, css } from "styled-components";

export const theme = {
  colors: {
    shape: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    dark: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    primary: (opacity = 1) => `rgba(0, 153, 255, ${opacity})`,
    accept: (opacity = 1) => `rgba(0, 204, 102, ${opacity})`,
    reject: (opacity = 1) => `rgba(255, 26, 26, ${opacity})`,
  },
  fonts: {
    family: {
      primary: "'Inter', sans-serif",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }

      html {
        width: 100%;
      }

      body {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: relative;
        background: ${theme.colors.dark()};
      }

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      input,
      button,
      textarea {
        font-family: ${theme.fonts.family.primary};
      }

      strong {
        font-weight: normal;
        display: block;
        font-size: 0.8rem;
      }

      p {
        font-size: 0.8rem;
        margin-top: 0.6rem;
        font-weight: 100;
        color: ${theme.colors.shape(0.7)};
      }

      span.author {
        margin-top: 0.6rem;
        font-size: 0.7rem;
        color: ${theme.colors.primary()};
      }

      ::-webkit-scrollbar {
        width: 2px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: ${theme.colors.dark()};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.primary()};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.primary()};
      }
    `}
`;
