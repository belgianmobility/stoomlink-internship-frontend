import { Outlet } from "@remix-run/react";

export default function TestRoute() {
  return (
    <div>
      <h1>Test</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}