import React, { useEffect, useState } from "react";
import "./Popup.css";
import CloseIcon from "@mui/icons-material/Close";
import ButtonDS from "../Button/Button";

const PopupDS = ({
  size,
  showCloseButton,
  title,
  body,
  onAccept,
  onReject,
  acceptText,
  rejectText,
  showRejectButton,
  isVisible, // Prop que controla la visibilidad del modal
  onClose,   // Prop para manejar el cierre desde el componente padre
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Cuando se abre el popup, activa la animación
      setIsAnimating(true);
    } else {
      // Si se cierra, espera la duración de la animación antes de desactivar
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duración de la transición en CSS (0.3s)

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("popup-overlay")) {
      onClose(); // Llamamos a la función de cierre desde el padre
    }
  };

  return (
    <>
      {(isVisible || isAnimating) && (
        <div
          className={`popup-overlay ${isVisible ? "show" : ""}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`popup ${size === "large" ? "popup-large" : "popup-medium"} ${
              isVisible ? "show" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <button className="popup-close" onClick={onClose}>
                <CloseIcon className="toast_closeButton" />
              </button>
            )}
            {title && <div className="popup-title">{title}</div>}
            <div className="popup-body">{body}</div>
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
      )}
    </>
  );
};

export default PopupDS;
