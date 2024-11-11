import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import { Provider, useDispatch } from "react-redux";
import { appStore } from "./utils/appStore";
import NoPath from "./Components/NoPath";
import PlayMovie from "./Components/PlayMovie";
import FavouriteMovies from "./Components/FavouriteMovies";
import WatchLaterMovies from "./Components/WatchLaterMovies";

function App() {
  // const routerInfo = createBrowserRouter([
  //   {
  //   path: "/",
  //   element: <Login />,
  //   children: [
  //     {
  //       path: "/browse",
  //       element: <Browse />,
  //     },
  //     {
  //       path: "/",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/watch/:movieId",
  //       element: <PlayMovie />,
  //     },
  //     {
  //       path: "/favouriteMovies",
  //       element: <FavouriteMovies />,
  //     },
  //     {
  //       path: "/watchLater",
  //       element: <WatchLaterMovies />,
  //     },
  //     // {
  //     //   errorElement: "/*",
  //     //   element: <NoPath/>
  //     // }
  //   ],
  //   errorElement: <NoPath />,
  // }
  // ]);

  const routerInfo = createBrowserRouter([
    
    // path: "/",
    // element: <Login />,
    // children: [
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/watch/:movieId",
        element: <PlayMovie />,
      },
      {
        path: "/favouriteMovies",
        element: <FavouriteMovies />,
      },
      {
        path: "/watchLater",
        element: <WatchLaterMovies />,
      },
      // {
      //   errorElement: "/*",
      //   element: <NoPath/>
      // }
    // ],
    // errorElement: <NoPath />,
]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={routerInfo}>
        <div className="font-bold">
          Lets get Started
          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
