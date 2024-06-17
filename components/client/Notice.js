"use client";
import { useState, useEffect } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Alert, Typography } from "@/components/client";

import sharedContent from "@/config/sharedContent.json";

const Notice = () => {
  const [open, setOpen] = useState(false);

  const NOTICED = "noticed";
  const { title } = sharedContent;


  const setNoticed = () => {
    localStorage.setItem(NOTICED, true);
    setOpen(false);
  };

  useEffect(() => {
    const noticed = localStorage.getItem(NOTICED);

    if (!noticed) {
      setOpen(true);
    }
  }, []);
  return (
    <Alert
      open={open}
      className="max-w-screen rounded-none px-6 py-6"
      icon={
        <span>
          <WarningIcon />
        </span>
      }
      onClose={setNoticed}
    >
      <Typography variant="h5">Notice</Typography>
      <Typography className="mt-2 font-normal">
        <span className="font-bold">{title}</span> is currently a demo version
        and is not yet the official Crime Report Management System of the
        municipality of Lavezares. If you have any concerns or business matters
        related to this website
      </Typography>
    </Alert>
  );
};

export default Notice;
