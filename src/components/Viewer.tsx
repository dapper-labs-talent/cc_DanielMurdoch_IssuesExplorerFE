import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { IssueCard } from '../types';
import {ReactComponent as Icon} from '../_assets/icons/close.svg'

const ViewerWrapper = styled.div`
  max-width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 36px;
  line-height: 49px;

  width: 100%
  height: 120px;
  border: 2px solid #000000;
`

const HeaderUrl = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  font-size: 36px;
  line-height: 49px;

  width: 100%
  height: 120px;
  margin: 10px 0 10px 0;
`

const NavigationFilters = styled.div``

const NavigationButton = styled.button`
  border: none;
  background-color: inherit;
  padding: 14px 23px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
`

const CloseButton = styled(Icon)`
  width: 40px;
  cursor: pointer;
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

type ViewerProps = {
  url: string
  exit: () => void
  issues: IssueCard[]
  isLoading: boolean
}

function Viewer ({url, exit, issues, isLoading}: ViewerProps) {
  const [filter, setFilter] = useState('all')

  const onClose = () => {
    exit()
  }
  
  return (
    <ViewerWrapper>
      <Header>
        <h2>GitHub Issue Viewer</h2>
        <HeaderUrl>{url}</HeaderUrl>
      </Header>
      <Navigation>
        <NavigationFilters>
          <NavigationButton onClick={() => setFilter('all')}>All Issues</NavigationButton>
          <NavigationButton onClick={() => setFilter('open')}>Open Issues</NavigationButton>
          <NavigationButton onClick={() => setFilter('closed')}>Closed Issues</NavigationButton>
          <NavigationButton onClick={() => setFilter('pulls')}>Pull Requests</NavigationButton>
        </NavigationFilters>
        <CloseButton onClick={onClose}/>
      </Navigation>
      { isLoading
        ? <div>loading...</div>
        : <List>
            {
              issues.map(issue => {
                if (
                  (filter === 'open' && !issue.isClosed) || 
                  (filter === 'closed' && issue.isClosed) ||
                  (filter === 'pulls' && issue.isPullRequest) ||
                  (filter === 'all')
                ){
                  return <Card 
                    title={issue.title}
                    body={issue.body}
                    labels={issue.labels}
                    isPullRequest={issue.isPullRequest}
                    isClosed={issue.isClosed}
                  />
                }
              })
            }
          </List>
      }
    </ViewerWrapper>
  )
}

export default Viewer;