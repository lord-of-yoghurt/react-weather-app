import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);

    return (
      <tr key={name}>
        <td className="col-md-3">{name}</td>
        <td className="col-md-3"><Chart data={temps} color="blue" units="ºF" /></td>
        <td className="col-md-3"><Chart data={pressure} color="orange" units=" hPa" /></td>
        <td className="col-md-3"><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-3">City</th>
            <th className="col-md-3">Temperature</th>
            <th className="col-md-3">Pressure</th>
            <th className="col-md-3">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
