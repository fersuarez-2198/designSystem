import React, { useEffect, useState } from "react";
import "./Toast.css";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from '@mui/icons-material/Warning';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Toast = ({ type, message, showCloseButton, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!visible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "error":
        return "toast-error";
      case "warning":
        return "toast-warning";
      case "loading":
        return "toast-loading";
      case "success":
        return "toast-success";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "error":
        return <ErrorIcon  className="toast_errorIcon"/>;
      case "warning":
        return <WarningIcon  className="toast_warIcon"/>;
      case "loading":
        return <PendingIcon  className="toast_loadIcon"/>;
      case "success":
        return <CheckCircleIcon  className="toast_succIcon"/>;
      default:
        return "";
    }
  };

  const truncateMessage = (msg) => {
    if (msg.length > 100) {
      return `${msg.substring(0, 100)}...`;
    }
    return msg;
  };

  return (
    <div className={`toast ${getToastStyles()}`}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{truncateMessage(message)}</div>
      {showCloseButton && (
        <button className="toast-close" onClick={() => setVisible(false)}>
          <CloseIcon className="toast_closeButton"></CloseIcon>
        </button>
      )}
    </div>
  );
};


export default Toast;
