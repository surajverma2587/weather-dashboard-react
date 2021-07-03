const CurrentWeather = (props) => {
  const { name, main, wind } = props.data;
  return (
    <div className="weather">
      <div className="card weather-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Temperature: {main.temp}</p>
          <p className="card-text">Humidity: {main.humidity}</p>
          <p className="card-text">Wind Speed: {wind.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
