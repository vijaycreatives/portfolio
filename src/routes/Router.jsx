import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    errorElement: <div className="flex items-center justify-center min-h-screen text-xl">Something went wrong</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);