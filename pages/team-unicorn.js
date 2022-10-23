import Dashboard from '../components/dashboard'
import DateTime from '../components/widgets/datetime'
import lightTheme from '../styles/light-theme'

export default () => (
  <Dashboard theme={lightTheme} name='Unicorn Dashboard'>
    <DateTime />
  </Dashboard>
)