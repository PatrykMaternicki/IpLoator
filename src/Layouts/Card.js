import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 350,
    boxShadow: 'none',
  },
});

const CardLayout = ({children}) => (
  <Card className={useStyles().root}>
    {children}
  </Card>
)

export default CardLayout