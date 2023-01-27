import { Link } from "gatsby";
import React from "react";

export const CallToActionButton = ({
  label,
  destination,
  fullWidth,
  isActive,
}) => {
  return (
    <Link
      to={destination}
      className={`${isActive ? "cursor-default bg-yellow-400" : ""} ${
        fullWidth ? "block" : "inline-block"
      } btn`}
    >
      {label}
    </Link>
  );
};
