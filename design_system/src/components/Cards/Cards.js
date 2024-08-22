import React, { useState } from "react";
import "./Cards.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CardDS = ({
  headerText,
  headerBackgroundColor = "#f5f5f5",
  headerTextColor = "#000",
  actions = [],
  children,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="card">
      <div
        className="card-header"
        style={{
          backgroundColor: headerBackgroundColor,
          color: headerTextColor,
        }}
      >
        {headerText && <span className="card-header-text">{headerText}</span>}
        {actions.length > 0 && (
          <div className="card-actions">
            <button
              className="card-actions-button"
              onClick={() => setShowActions(!showActions)}
            >
              <MoreVertIcon />
            </button>
            {showActions && (
              <ul className="card-actions-menu">
                {actions.map((action, index) => (
                  <li key={index} onClick={action.onClick}>
                    {action.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardDS;
