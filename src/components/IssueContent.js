/* eslint-disable prefer-const */
/* eslint-disable react/no-children-prop */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const IssueContent = () => {
  const [issues, setIssues] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/repos/angular/angular-cli/issues/${number}`)
      .then((Response) => Response.json())
      .then((data) => {
        setIssues(data);
      });
  }, [number]);

  const markdown = issues.body;

  return (
    <ContentContainer>
      {issues.title && (
        <div>
          <div>
            <img src={issues.user.avatar_url} alt="" />
          </div>

          <div>{issues.title}</div>

          <div>{issues.number}</div>

          <div>{issues.user.login}</div>

          <div>{issues.created_at.substr(0, 10)}</div>

          <div>{issues.comments}</div>

          <div>
            <ReactMarkdown children={markdown} remarkPlugins={remarkGfm} />
          </div>
        </div>
      )}
    </ContentContainer>
  );
};

export default IssueContent;

const ContentContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 20px 0 20px;
`;

const AvatarImg = styled.img`
  width: 40px;
`;
