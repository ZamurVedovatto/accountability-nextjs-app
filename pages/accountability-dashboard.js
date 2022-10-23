import Dashboard from '../components/dashboard'

// Widgets
import DateTime from '../components/widgets/datetime'
import PageSpeedInsightsScore from '../components/widgets/pagespeed-insights/score'
import ExpensesList from '../components/widgets/pagespeed-insights/expenses-list'
import PageSpeedInsightsStats from '../components/widgets/pagespeed-insights/stats'
import JiraIssueCount from '../components/widgets/jira/issue-count'
import SonarQube from '../components/widgets/sonarqube'
import JenkinsJobStatus from '../components/widgets/jenkins/job-status'
import JenkinsJobHealth from '../components/widgets/jenkins/job-health'
import JenkinsBuildDuration from '../components/widgets/jenkins/build-duration'
import BitbucketPullRequestCount from '../components/widgets/bitbucket/pull-request-count'
import ElasticsearchHitCount from '../components/widgets/elasticsearch/hit-count'
import GitHubIssueCount from '../components/widgets/github/issue-count'

// Theme
import lightTheme from '../styles/light-theme'
import darkTheme from '../styles/dark-theme'

export default () => (
  <Dashboard theme={darkTheme}>
    <DateTime />
    <ExpensesList />
  </Dashboard>
)
