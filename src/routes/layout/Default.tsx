import { Outlet } from "react-router";

export default function Default() {
  return (
    <div className="w-270 mx-auto shadow-[inset_0_0_10px_red] h-screen">
      <Outlet />
    </div>
  );
}
