import Image from "next/image";
import styled, { css } from "styled-components";

export const Document = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark(0.5)};
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `}
`;

export const Filter = styled.div`
  ${({ theme }) => css`
    background-image: url("/bg_document.png");
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark(0.9)};
    padding: 10rem 0;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 1000px) {
      padding: 10rem 1rem;
    }
  `}
`;

export const Hl = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary()};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 50rem;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${theme.colors.shape()};
    letter-spacing: 2px;

    &.center {
      text-align: center;
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
      padding: 0 2rem;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    width: 50rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
    color: ${theme.colors.shape()};

    @media screen and (max-width: 1000px) {
      width: 100%;
      padding: 0 2rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 50rem;
    font-size: 1rem;
    font-weight: normal;
    text-align: justify;
    /* text-transform: uppercase; */
    line-height: 2rem;
    letter-spacing: 1px;
    color: ${theme.colors.shape(0.8)};

    & > b {
      color: ${theme.colors.shape()};
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
      padding: 0 2rem;
    }
  `}
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const List = styled.ul`
  width: 40rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 0 0 3rem;
  }
`;

export const Item = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.shape()};
  `}
`;

export const CImage = styled(Image)`
  ${({ theme }) => css`
    border: 5px solid ${theme.colors.primary(0)};
    outline: 2px solid ${theme.colors.primary()};
    object-fit: cover;
    object-position: center;
    margin-top: 2rem;
    border-radius: 3px;

    @media screen and (max-width: 1000px) {
      width: 100%;
      height: auto;
    }
  `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled(Image)`
  
`;

export const Description = styled.p`
  ${({ theme }) => css`  
    font-size: 1rem;
    color: ${theme.colors.shape()};
    text-align: center;
    &>b{
    color: ${theme.colors.primary()};
    
    }
`}
`;