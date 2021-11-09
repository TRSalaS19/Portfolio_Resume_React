import React from "react";

function TopBrand() {
  return (
    <div className="topBrand">
      <div className="topBrand__info-container">
        <div className="topBrand__info-item brand-logo">
          <h3>&#123;GRS_DEV&#125;</h3>
        </div>
        <div className="topBrand__info-item middle-item">
          <i className="fas fa-mobile-alt header-icon"></i>
          <p>510-417-6757</p>
        </div>
        <div className="topBrand__info-item last-item">
          <i className="fas fa-envelope-square header-icon"></i>
          <p>GRuiSalas@icloud.com</p>
        </div>
      </div>
    </div>
  );
}

export default TopBrand;
