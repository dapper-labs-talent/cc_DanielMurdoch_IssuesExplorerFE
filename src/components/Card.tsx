import React from 'react'
import styled from 'styled-components'
import { IssueCard } from '../types'
import {ReactComponent as PullIcon} from '../_assets/icons/pull-request.svg'
import {ReactComponent as ClosedIcon} from '../_assets/icons/issue-closed.svg'

const CardWrapper = styled.div`
  height: 240px;
  max-width: 420px;
  margin: 10px;

  border: 2px solid #000000;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;
`

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 72px;
`

const CardHeader = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`

const StyledPullIcon = styled(PullIcon)`
  max-width: 20px;
  margin-left: 10px;
`

const StyledClosedIcon = styled(ClosedIcon)`
  max-width: 20px;
  margin-left: 10px;
`

const CardBody = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  max-height: 75px;
  flex-grow: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`

const CardTagArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

`

const CardTag = styled.div`
  padding: 4px 8px;
  gap: 4px;

  height: 22px;

  border: 2px solid #000000;
  border-radius: 5px;

  font-size: 16px;
  line-height: 14px;

  display: flex;
  align-items: center;
  margin: 5px;
`

const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
`

function Card({title, body, labels, isClosed, isPullRequest}: IssueCard) {
  return(  
    <CardWrapper>
      <HeaderWrapper>
        <CardHeader>
          {title}
        </CardHeader>
        { isClosed && <StyledClosedIcon /> }
        { isPullRequest && <StyledPullIcon /> }
      </HeaderWrapper>
      <CardBody>{body}</CardBody>
      <CardTagArea>
        {
          labels.map(label => {
            return (
              <CardTag>
                <Dot />
                {label.name}
              </CardTag>
            )
          })
        }
      </CardTagArea>
    </CardWrapper>
  )
}

export default Card