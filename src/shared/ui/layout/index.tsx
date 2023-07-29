import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export function Layout({ navbar }: { navbar: ReactNode }) {
  return (
    <>
      {navbar}
      <main>
        <Outlet />
      </main>
    </>
  );
}
