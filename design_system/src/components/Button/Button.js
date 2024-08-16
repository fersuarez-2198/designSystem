import React from "react";
import "./Button.css";

// Importación de  iconos de Material Icons
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';

const ButtonDS = ({
  label,
  hasText,
  onClick,
  className,
  width,
  hasIcon,
  iconType,
}) => {
  const style = hasText
    ? {
        width: width || "180px", // Valor predeterminado si no se proporciona `width`
        height: "36px",
        borderRadius: "20px",
      }
    : {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      };

  const renderIcon = () => {
    if (!hasIcon) return null;
    switch (iconType) {
      case 'search':
        return <SearchIcon className="button-icon" />;
      case 'check':
        return <CheckIcon className="button-icon" />;
      default:
        return null;
    }
  };

  return (
    <button className={`button ${className}`} onClick={onClick} style={style}>
      {hasText && label}
      {renderIcon()}
    </button>
  );
};

export default ButtonDS;
