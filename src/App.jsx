import { createBrowserRouter, RouterProvider } from "react-router";
import HomeIndexPage from "./pages/home/HomeIndexPage";
import CallRoomPage from "./pages/callRoom/CallRoomPage";


function App() {
  const route = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HomeIndexPage/>,
  },
  {
    path: "/call-room/:roomCode",
    element: <CallRoomPage/>,
  },
]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
