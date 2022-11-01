import React, { useState, useCallback, useEffect } from 'react';
import { getIssuesList } from '../apis/api';
import IssuesList from '../components/IssueList';

const Main = () => {
  const [scroll, setScroll] = useState(1);
  const [buckets, setBuckets] = useState([]);

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScroll(scroll + 1);
    }
  });

  const fetchData = useCallback(async () => {
    const id = {
      sort: 'comments',
      per_page: 10,
      page: scroll,
    };

    await getIssuesList(id)
      .then(({ data }) => {
        setBuckets([...buckets, ...data]);
      })

      .catch((e) => {});
  }, [scroll]);

  useEffect(() => {
    fetchData();
  }, [scroll]);

  return <IssuesList buckets={buckets} />;
};

export default Main;
