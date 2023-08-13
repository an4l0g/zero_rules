import React, { useCallback, useContext, useMemo } from "react";
import * as S from "./styles";
import Rules from "./rules";

function Document() {
  return (
    <S.Document id="rules">
      <S.Filter>
        <S.Content>
          {Rules.map((rule, index) => (
            <>
              <S.Title id={`rule${index}`}>
                <S.Hl>{index + 1}. </S.Hl>
                {rule.title}
              </S.Title>
              {rule.description && (
                <>
                  <S.Paragraph>{rule.description}</S.Paragraph>
                  <S.Space />
                </>
              )}
              {rule.rules && (
                <>
                  {rule.rules.map((internalRule, indexInternalRule) => (
                    <>
                      <S.Paragraph>
                        <b>
                          {index + 1}.{indexInternalRule + 1}.
                        </b>{" "}
                        {internalRule.content}
                      </S.Paragraph>
                      {internalRule.extras && (
                        <>{internalRule.extras.map((extra) => extra)}</>
                      )}
                    </>
                  ))}
                  <S.Space />
                </>
              )}
            </>
          ))}
        </S.Content>
      </S.Filter>
    </S.Document>
  );
}

export default Document;
