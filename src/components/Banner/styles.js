import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: url("/bg.png");
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
  `}
`;

export const Filter = styled.div`
  ${({ theme }) => css`
    background-image: linear-gradient(
      to bottom right,
      ${theme.colors.primary(0.5)},
      ${theme.colors.dark(0.8)}
    );
    background-color: ${theme.colors.dark(0.5)};
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.shape()};
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.8;
  `}
`;

export const ScrollIndicator = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.shape()};
    width: 35px;
    height: 50px;
    position: absolute;
    bottom: 2rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  `}
`;

const ScrollIndicatorAnimation = keyframes`
    0% {
        top: 2px;
        opacity: 1;
    }
    100% {
        top: 30px;
        opacity: 0;
    }
`;

export const Indicator = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape()};
    width: 5px;
    height: 8px;
    border-radius: 5px;
    position: absolute;
    top: 5px;
    animation: ${ScrollIndicatorAnimation} 2s linear infinite;
  `}
`;
