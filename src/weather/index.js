import React from "react";
import Form from "../components/form";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import {
  GlobalStyle,
  Container,
  FormContainer,
  Celsius,
  City,
  Sunrise,
  Sunset
} from "./styles";

const API_KEY = "73ba5a2394ecd39a0a0848cbfa379832";

class Header extends React.Component {
  state = {
    temp: "28°C",
    city: "London",
    country: "UK",
    sunrise: `Sunrise: 07:59`,
    sunset: `Sunset: 15:52`,
    error: ""
  };

  gettingWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    //console.log(data);

    const { sunset, sunrise } = data.sys;
    const sunriseDate = new Date(sunrise * 1000).toLocaleString().split(" ")[1];
    const sunsetDate = new Date(sunset * 1000).toLocaleString().split(" ")[1];

    this.setState({
      temp: `${data.main.temp}°C`,
      city: data.name,
      country: data.sys.country,
      sunrise: `Sunrise: ${sunriseDate}`,
      sunset: `Sunset: ${sunsetDate}`,
      error: ""
    });
  };

  render() {
    const { temp, city, country, sunrise, sunset } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Celsius>{temp}</Celsius>
        <City>
          {city}, {country}
        </City>
        <Sunrise>{sunrise}</Sunrise>
        <Sunset>{sunset}</Sunset>
        <FormContainer>
          <Form weatherMethod={this.gettingWeather} />
        </FormContainer>
      </Container>
    );
  }
}

export const Weather = props => {
  return <Header />;
};
