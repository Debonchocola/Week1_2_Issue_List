/* eslint-disable prefer-template */
/* eslint-disable no-return-await */
import axios from 'axios';

const url = 'https://api.github.com/repos/angular/angular-cli';

export async function getIssuesList() {
  return await axios.get(url + '/issues?sort=comments');
}
export async function getIssuesDetail(id) {
  return await axios.get(url + `/issues/${id}`, {
    params: id,
  });
}

export async function getIssuesScroll() {
  return await axios.get(url + '/issues');
}
