import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import RecentSearches from "./components/RecentSearches";
import SearchForm from "./components/SearchForm";

function App() {
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
          <SearchForm />
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
