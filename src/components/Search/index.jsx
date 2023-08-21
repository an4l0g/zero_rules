import React, { useContext, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Rules from "../Document/rules";
import { scrollTo } from "@/utils";

function Search() {
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      // if (event.ctrlKey && event.key === "f") {
      //   event.preventDefault();
      //   setShow(true);
      //   inputRef.current.focus();
      // }

      if (event.key === "Escape") {
        event.preventDefault();
        setSearch("");
        setShow(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShow]);

  return (
    <>
      <S.ButtonSearch
        isShow={show}
        onClick={() => {
          setShow((old) => !old);

          if (show) setSearch("");
          inputRef.current.focus();
        }}
      >
        {show && <AiOutlineClose />}
        {!show && <BsSearch />}
      </S.ButtonSearch>

      <S.SearchInputWrap className={show ? "show" : ""}>
        <S.SearchInput
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por..."
        />
        <S.List>
          {Rules.map((item, index) => (
            <>
              {item.title.toLowerCase().includes(search.toLowerCase()) && (
                <S.Item onClick={() => scrollTo(`rule${index}`)}>
                  <b>{index + 1}.</b> {item.title}
                </S.Item>
              )}
            </>
          ))}
        </S.List>
      </S.SearchInputWrap>
    </>
  );
}

export default Search;
