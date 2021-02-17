import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
  root: {
    backgroundColor: '#DCDCDC',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  }
})

const NoData = () => (
  <CardContent className={useStyle().root}>
      No Data
  </CardContent>
)

export default NoData