import { GitHubRepo } from ".";

const URL_REPOS = 'https://api.github.com/users/luk3ns/repos';
const FORBIDDEN_REPOS = ['samples'];

const convert = ({
    name,
    stargazers_count: stars,
    license,
    html_url: url,
    description,
    size
}) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : '',
    url,
    description : description ? description : '',
    size
});

export default function getRepos() {
    return fetch(URL_REPOS)
    .then((response) => {
        if(response.ok){
            return response.json();
        }else
        throw Error('Response not 200');
    })
    .catch((err) => {
        console.warn(err);
    })
    .then(arr => arr
        .filter(r => !FORBIDDEN_REPOS.includes(r.name))
        .filter(r => r.size > 0)
        .map(convert)
    );
}