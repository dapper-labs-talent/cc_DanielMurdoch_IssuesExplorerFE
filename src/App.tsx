import React, { useState } from 'react';
import styled from 'styled-components'
import { Octokit } from 'octokit';

import SearchPage from './components/SearchPage';
import Viewer from './components/Viewer';
import { IssueCard } from './types';

const octokit = new Octokit({
  auth: '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'
});

const Wrapper = styled.div`

`

type StringLabelType = {
  name: string
}

function App() {

  const [view, setView] = useState('search')
  const [url, setUrl] = useState('')
  const [issues, setIssues] = useState<IssueCard[]>([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  const onSearch = async (event: React.FormEvent) => {
    event.preventDefault()
    const ownerAndRepo = url.replace('https://github.com/', '')
    const [owner, repo] = ownerAndRepo.split('/')

    if(!ownerAndRepo || !owner || !repo){
      // Note: This error checking could be much more in depth but for speed i'm leaving this as is.
      setError(`This doesn't appear to be a valid github URL...`)
      return
    }

    setIsloading(true)
    setError('')
    setUrl(url)
    setView('issues')

    try {
      const mappedIssues = await octokit.paginate(
        `GET /repos/{owner}/{repo}/issues`, {
          owner: owner,
          repo: repo,
          state: 'all'
        },
        (response) => response.data.map((issue) => {
          const mappedLabels = issue.labels.map((label) => {
            const nameObject = label as StringLabelType;
            return { name: nameObject.name };
          });
  
          return {
            body: issue.body,
            title: issue.title,
            labels: mappedLabels,
            isPullRequest: !!issue.pull_request,
            isClosed: !!issue.closed_at
          };
        })
      ) as unknown as IssueCard[]

      setIsloading(false)
      setIssues(mappedIssues)
    } catch (error) {
      // Note: This results in an unideal UI that flashes to the view screen and back
      // upon noticing the invalid repo. This means the loading screen should be on the search
      // to avoid this, but for the sake of time I'm leaving this as is.
      setIsloading(false)
      setView('search')
      setError(`This doesn't appear to be a valid GitHub repo...`)
    }
  }

  const onExit = () => {
    setUrl('')
    setView('search')
  }

  return (
    <Wrapper>
      { 
        view === 'search' 
        ? <SearchPage search={onSearch} onChange={handleChange} url={url} error={error}/>
        : <Viewer url={url} exit={onExit} issues={issues} isLoading={isLoading}/>
      }
    </Wrapper>
    
  );
}

export default App;
