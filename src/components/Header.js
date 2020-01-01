import React from "react";

const Header = ({ title }) => {
  return (
    <header className="container-fluid border-bottom">
      <div className="row">
        <div className="col-12 py-4 text-center">
          <h1 className="h4 mb-0">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
