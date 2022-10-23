import Dashboard from '../components/dashboard'

// Widgets
import DateTime from '../components/widgets/datetime'
import ExpensesList from '../components/widgets/accountability/expenses-list'

// Theme
import lightTheme from '../styles/light-theme'
import darkTheme from '../styles/dark-theme'

export default () => (
  <Dashboard theme={darkTheme}>
    <DateTime />
    <ExpensesList />
  </Dashboard>
)
