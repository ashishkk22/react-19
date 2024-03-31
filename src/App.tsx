import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
