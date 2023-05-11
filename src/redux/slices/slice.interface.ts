export interface IssueInitialState {
  issues: string[];
}

export interface GithubInitialState {
  githubIssues: string[];
  isLoading: boolean;
  isError: string | null;
}
