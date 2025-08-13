import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix Token Presale</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
