import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const S2MediaProject = lazy(() => import("../pages/S2MediaProject"));
const SenthurProject = lazy(() => import("../pages/SenthurProject"));
const AarcProject = lazy(() => import("../pages/AarcProject"));
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
      {
        path: "project/s2media",
        element: (
          <Suspense fallback={<Loading />}>
            <S2MediaProject />
          </Suspense>
        ),
      },
      {
        path: "project/senthur",
        element: (
          <Suspense fallback={<Loading />}>
            <SenthurProject />
          </Suspense>
        ),
      },
      {
        path: "project/aarc",
        element: (
          <Suspense fallback={<Loading />}>
            <AarcProject />
          </Suspense>
        ),
      },
    ],
  },
]);