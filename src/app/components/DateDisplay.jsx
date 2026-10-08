"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleDateString("bn-BD", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setHeader(date);
  }, []);

  return (
    <p className="text-xs text-gray-500">
      {header}
    </p>
  );
};

export default DateDisplay;