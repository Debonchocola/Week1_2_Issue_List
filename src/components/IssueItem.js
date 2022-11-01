/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';

const IssueItem = ({ number, title, writer, date, comments, AdBanner }) => {
  return (
    <>
      <ItemContainer>
        <div>
          <IssueIdTItle>
            <a href={`/${number}`}>
              #{number} {title}
            </a>
          </IssueIdTItle>

          <IssueWriterDate>
            작성자: {writer}, 작성일: {date.substr(0, 10)}
          </IssueWriterDate>
        </div>

        <IssueComments>코멘트: {comments}</IssueComments>
      </ItemContainer>
      <AdContainer>
        {AdBanner && (
          <a href="https://www.wanted.co.kr/">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="Advertisement"
            />
          </a>
        )}
      </AdContainer>
    </>
  );
};

export default IssueItem;

const ItemContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 50px;
`;

const IssueIdTItle = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const IssueWriterDate = styled.div`
  font-size: 1.5rem;
`;

const IssueComments = styled.div`
  font-size: 1.5rem;
`;
const AdContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  line-height: 50px;
`;
