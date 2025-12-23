import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, asLink, to, onClick, className = "" }) {
  const base = "btn";
  const classes = `${base} ${className}`.trim();

  if (asLink) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
