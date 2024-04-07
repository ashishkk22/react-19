import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../components/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import ReactCompilerExample from "../pages/ReactCompiler/ReactCompilerExample";
import { RouterPath } from "./router.type";
import UseExample from "../pages/UseExample/UseExample";
import UseExample2 from "../pages/UseExample2/UseExample2";
import ActionExample from "../pages/ActionExample/ActionExample";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route
          path={RouterPath.REACT_COMPILER}
          element={<ReactCompilerExample />}
        />
        <Route path={RouterPath.USE_EXAMPLE} element={<UseExample />} />
        <Route path={RouterPath.USE_EXAMPLE_2} element={<UseExample2 />} />
        <Route path={RouterPath.ACTION_EXAMPLE} element={<ActionExample />} />
      </Route>
    </>
  )
);

export default router;
