import { Component } from "react";

import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import RecentSearches from "./components/RecentSearches";
import SearchForm from "./components/SearchForm";
import ErrorCard from "./components/ErrorCard";

import fetchData from "./utils/fetchData";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Birmingham",
      data: null,
      error: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.getWeatherData();
  }

  async getWeatherData() {
    const params = {
      q: this.state.cityName,
      units: "metric",
      appid: "60b4fb66103f9e3c6f93920a7d7f1377",
    };

    const { data, error } = await fetchData(
      "http://api.openweathermap.org/data/2.5/weather",
      params
    );

    if (data) {
      this.setState({
        data,
        error: null,
        isLoading: false,
      });
    }

    if (error) {
      this.setState({
        error,
        data: null,
        isLoading: false,
      });
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await this.getWeatherData();
  };

  onChange = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };

  renderCurrentCard() {
    const { data, error, isLoading } = this.state;

    if (data && !isLoading && !error) {
      return <CurrentWeather data={data} />;
    } else if (!data && !isLoading && error) {
      return <ErrorCard message={error} />;
    } else {
      return <LoadingSpinner />;
    }
  }

  render() {
    return (
      <div className="">
        <Header
          title="Weather Dashboard"
          subtitle="Weather or not here it comes..."
        />
        <div className="row main g-0">
          <div className=" col-sm-12 col-md-3">
            <RecentSearches />
          </div>
          <div className="col-sm-12 col-md-9">
            <SearchForm
              placeholder="Enter city name"
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              value={this.state.cityName}
            />
            {this.renderCurrentCard()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
