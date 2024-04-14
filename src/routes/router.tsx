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
import UseFormState from "../pages/UseFormState/UseFormState";
import UseFormStatus from "../pages/UseFormStatus/UseFormStatus";
import UseOptimistic from "../pages/UseOptimistic/UseOptimistic";
import DocumentMetaData from "../pages/DocumentMetaData/DocumentMetaData";
import RefHandlingExample from "../pages/RefHandlingExample/RefHandlingExample";

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
        <Route path={RouterPath.USE_FORM_STATE} element={<UseFormState />} />
        <Route path={RouterPath.USE_FORM_STATUS} element={<UseFormStatus />} />
        <Route path={RouterPath.USE_OPTIMISTIC} element={<UseOptimistic />} />
        <Route
          path={RouterPath.DOCUMENT_METADATA}
          element={<DocumentMetaData />}
        />
        <Route
          path={RouterPath.REF_HANDLING}
          element={<RefHandlingExample />}
        />
      </Route>
    </>
  )
);

export default router;
