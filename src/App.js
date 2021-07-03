import "./App.css";

function App() {
  return (
    <div className="border border-danger">
      <div className="header">Header</div>
      <div className="row border main g-0">
        <div className="border col-sm-12 col-md-3">
          <div>Recent Cities</div>
        </div>
        <div className="border col-sm-12 col-md-9">
          <div className="border search">Search</div>
          <div className="border weather">Weather Data</div>
        </div>
      </div>
    </div>
  );
}

export default App;
