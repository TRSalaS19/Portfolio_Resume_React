import React from "react";

function TopBrand() {
  return (
    <div className="topBrand">
      <div className="topBrand__brand-logo">
        <h2>&#123;GRS_DEV&#125;</h2>
      </div>
      <div className="topBrand__info-container">
        <i className="fas fa-mobile-alt header-icon"></i>
        <p>510-417-6757</p>
      </div>
      <div className="topBrand__info-container">
        <i className="fas fa-envelope-square header-icon"></i>
        <p>GRuiSalas@icloud.com</p>
      </div>
    </div>
  );
}

export default TopBrand;
