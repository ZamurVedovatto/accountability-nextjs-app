import PageList from '../components/list'
import DateTime from '../components/widgets/datetime'
import lightTheme from '../styles/light-theme'

import Link from 'next/link';

import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default () => (
  <PageList theme={lightTheme} name='Unicorn Dashboard'>
    <span>expenses - list</span>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      <Button
        variant="contained"
        href="/accountability-dashboard"
      >
        Dashboard
      </Button>
  </PageList>
)