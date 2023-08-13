import styled, { css } from "styled-components";

export const ButtonSearch = styled.button`
  ${({ theme, isShow }) => css`
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: ${theme.colors.dark()};
    width: 3rem;
    height: 3rem;
    border: 0;
    color: ${theme.colors.shape()};
    z-index: 2;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 2px 2px 2px ${theme.colors.dark(0.2)};
    transition: all 0.2s;

    ${isShow &&
    css`
      border: 1px solid ${theme.colors.primary(0.5)};
    `}
  `}
`;

export const SearchInputWrap = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark()};
    position: fixed;
    top: 0rem;
    right: -30rem;
    z-index: 1;
    width: 30rem;
    height: 100vh;
    transition: right 0.2s;
    box-shadow: 2px 2px 2px ${theme.colors.dark(0.5)};

    &.show {
      right: 0;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark(0)};
    border: 0;
    outline: 0;
    width: 100%;
    height: 80px;
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    color: ${theme.colors.shape()};
    padding: 0 2rem;
  `}
`;

export const List = styled.ul`
  width: 100%;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  list-style: none;
`;

export const Item = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.shape()};
    font-size: 1.3rem;
    cursor: pointer;

    & > b {
      color: ${theme.colors.primary()};
    }
  `}
`;
