import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class LocationSearch extends React.Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = (event) => {
    this.props.searchForQuery(this.state.text)
    this.setState({text: ''})
    event.preventDefault();
  }

  handleFocus = () => {
    this.props.errorMsg && this.props.clearError()
  }

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
        <Grid container>
          <Grid item xs={8}>
            <TextField
              className="full"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              value={this.state.text}
              error={this.props.errorMsg ? true : false} 
              id="outlined-basic" 
              label="Write IP" 
              variant="outlined" 
              helperText={this.props.errorMsg ? this.props.errorMsg : ' '}
            />
          </Grid>
          <Grid 
            item 
            xs={4}
            style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}
          >
            <Button
              style={{width: '75%'}}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default LocationSearch