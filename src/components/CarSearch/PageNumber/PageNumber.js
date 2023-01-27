import React from "react";
import { CallToActionButton } from "../../CallToActionButton";

export const PageNumber = ({ pageNumber }) => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const currentPageNumber = params.get("page");
    params.set("page", pageNumber);
    return (
      <CallToActionButton
        label={pageNumber}
        isActive={(currentPageNumber || "1") === pageNumber.toString()}
        destination={`${window.location.pathname}?${params.toString()}`}
      />
    );
  }
  return null;
};
