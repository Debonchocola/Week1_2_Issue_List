## 1주차 2번째 과제(Issue_List) 구현사항

</br>

# 이슈목록화면

</br>

- ### 이슈목록 불러오기

```javascript
//IssueList.js
const IssueList = () => {
  const [issues, setIssues] = useState();
  const navigate = useNavigate();

  const getIssue = async (page = 1) => {
    await axios
      .get(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=20&page=${page}`
      )
      .then((result) => {
        if (result.status !== 200) navigate('/*');
        return setIssues(result.data);
      });
  };
  useEffect(() => {
    getIssue();
  }, []);
```

Issue목록을 불러오는 Get요청입니다. 코멘트 수를 기준으로 정렬을 했고, 한 페이지에 20개씩 뜨도록 했습니다.
잘못된 경로일 경우 에러페이지로 이동하도록 했습니다. useEffect를 통해 렌더링 될때 마다 뜰 수 있도록 했습니다.
</br>

- ### 이슈목록에 필요한 요소만 이슈 아이템으로 보내기

```javascript
//IssueList.js
{
  issues &&
    issues.map((issue, i) => (
      <IssueItem
        id={issue.id}
        title={issue.title}
        writer={issue.user.login}
        date={issue.created_at}
        comments={issue.comments}
        AdBanner={i === 3}
      />
    ));
}
```

데이터를 담은 issues를 map으로 묶어서 필요한 요소만 뽑아서 IssueItem에 담아줬습니다.
광고 배너를 5번째칸에 띄우기 위해서 index 3이면 들어가도록 해주었습니다.
</br>
