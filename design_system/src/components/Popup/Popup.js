import React from "react";
import "./Popup.css";
import CloseIcon from "@mui/icons-material/Close";
import ButtonDS from "../Button/Button";

const Popup = ({
  size,
  showCloseButton,
  title,
  body, // Aquí seguimos usando `body` pero permitiendo que acepte JSX
  onAccept,
  onReject,
  acceptText,
  rejectText,
  showRejectButton,
}) => {
  return (
    <div className="popup-overlay">
      <div
        className={`popup ${size === "large" ? "popup-large" : "popup-medium"}`}
      >
        {showCloseButton && (
          <button className="popup-close" onClick={onReject || onAccept}>
            <CloseIcon className="toast_closeButton" />
          </button>
        )}
        {title && <div className="popup-title">{title}</div>}
        <div className="popup-body">{body}</div> {/* Mantenemos `body` como prop */}
        <div className="popup-footer">
          {showRejectButton && (
            <ButtonDS
              className="button-variant8"
              hasText
              label={rejectText}
              onClick={onReject}
              width="120px"
            />
          )}
          <ButtonDS
            className="button-variant1"
            hasText
            label={acceptText}
            onClick={onAccept}
            width="120px"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
