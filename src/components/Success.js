import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

export class Success extends Component {

  back = e => {
    e.preventDefault();
    this.props.firstStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
      margin: 15
    }
  };

export default Success;
