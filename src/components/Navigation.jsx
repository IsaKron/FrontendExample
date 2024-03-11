import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <nav>
      {/* Linker Part: Schriftzug/ Logo */}
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      {/* Rechter Part: Help-Link */}
      <div className="right">
        <a href="#">Help</a>
      </div>
    </nav>
  );
};

export default Navigation;
