/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import IssueItem from './IssueItem';

const IssueList = () => {
  const [issues, setIssues] = useState();
  const navigate = useNavigate();
  const { issuenumber } = useParams();

  const getIssue = async (page = 1) => {
    await axios
      .get(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=10&page=${page}`
      )
      .then((result) => {
        if (result.status !== 200) navigate('/error');
        return setIssues(result.data);
      });
  };
  useEffect(() => {
    getIssue();
  }, []);

  return (
    <ul>
      {issues &&
        issues.map((issue, i) => (
          <IssueItem
            key={i}
            number={issue.number}
            title={issue.title}
            writer={issue.user.login}
            date={issue.created_at}
            comments={issue.comments}
            AdBanner={i === 3}
          />
        ))}
    </ul>
  );
};

export default IssueList;
