import React from 'react';
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const MainHeader = styled.h2``

const RepoInput = styled.input`
  height: 80px;
  max-width: 700px;
  width: 100%;
  border: 2px solid #000000;
  border-radius: 10px;  
  font-size: 24px;
`

type SearchPageProps = {
  search: (event: React.FormEvent) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  url: string
  error: string
}

function SearchPage({search, onChange, url, error}: SearchPageProps) {

  return (
    <MainWrapper>
      <MainHeader>GitHub Issue Viewer</MainHeader>
      <form onSubmit={search}>
        <RepoInput type="text" id="input" placeholder="Paste a link to a GitHub repo" value={url} onChange={onChange} />
      </form>
      {error}
    </MainWrapper>
  );
}

export default SearchPage;
