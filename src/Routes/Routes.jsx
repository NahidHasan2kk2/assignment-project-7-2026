import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import HomePage from "../components/Home/HomePage/HomePage";
import TimeLine from "../components/Home/TimeLine/TimeLine";
import Stats from "../components/Home/Stats/Stats";
import FriendDetails from "../components/Home/FriendDetails/FriendDetails";

const router = createBrowserRouter([
 {
  path: '/',
  element: <MainLayout></MainLayout>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
   {
    index: true,
    element: <HomePage></HomePage>
   },
   {
    path: '/timeline',
    element: <TimeLine></TimeLine>
   },
   {
    path: '/stats',
    element: <Stats></Stats>
   },
   {
    path: '/friendDetails/:id',
    Component: FriendDetails,
    loader: () => {
     return fetch('/data.json');
    },
   }

  ]
 }
]

)
export default router;