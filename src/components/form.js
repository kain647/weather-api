import React from "react";
import { StyledInput, StyledButton } from "../weather/styles";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <StyledInput type="text" name="city" placeholder="City.." required />
        <StyledButton>Update weather</StyledButton>
      </form>
    );
  }
}

export default Form;
