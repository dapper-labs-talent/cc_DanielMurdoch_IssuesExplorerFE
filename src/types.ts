export type IssueCard = {
  title: string,
  body: string,
  labels: {
    name: string
  }[],
  isClosed: boolean,
  isPullRequest: boolean
}