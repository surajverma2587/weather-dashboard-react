const Header = (props) => {
  return (
    <div className="header text-center p-3">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Header;
