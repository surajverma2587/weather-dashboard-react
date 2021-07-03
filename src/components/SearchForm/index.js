const SearchForm = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit}>
        <div className="row h-100 search-form">
          <div className="col-sm-12 col-md-10 p-2">
            <input
              type="text"
              className="form-control"
              id="search-city"
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
          </div>
          <div className="col-sm-12 col-md-2 p-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
