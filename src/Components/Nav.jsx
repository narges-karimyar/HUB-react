// Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Aside open={open} />
      <div className="flex-1 min-w-0 p-6">
        <Outlet context={{ open, setOpen }} />
      </div>
    </div>
  );
}
