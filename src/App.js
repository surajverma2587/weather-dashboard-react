import { Component } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import RecentSearches from "./components/RecentSearches";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Birmingham",
      fetchData: false,
    };
  }

  onCitySearch = (event) => {
    event.preventDefault();
    this.setState({
      fetchData: true,
    });
  };

  onChange = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };

  shouldComponentUpdate(_, nextState) {
    return nextState.fetchData;
  }

  render() {
    return (
      <div className="">
        <Header
          title="Weather Dashboard"
          subtitle="Weather or not here it comes..."
        />
        <div className="row border main g-0">
          <div className="border col-sm-12 col-md-3">
            <RecentSearches />
          </div>
          <div className="border col-sm-12 col-md-9">
            <SearchForm
              placeholder="Enter city name"
              onSubmit={this.onCitySearch}
              onChange={this.onChange}
            />
            <CurrentWeather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
