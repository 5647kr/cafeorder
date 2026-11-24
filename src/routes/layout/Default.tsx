import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from "sonner";

export default function Default() {
  return (
    <div className="w-270 mx-auto min-h-screen">
      <ScrollRestoration />

      <Toaster position="top-center" />

      <Outlet />
    </div>
  );
}
