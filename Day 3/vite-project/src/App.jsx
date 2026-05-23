import Body from "./Components/Body"
import { Route,Routes } from "react-router-dom"
import Browse from "./Components/Browse";
import { Toaster } from "@/components/ui/sonner";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Movies from "./Movies";
import MoviesDetails from "./MoviesDetails";

function App(){
  return (
    <div>
      <Provider store={appStore}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111827",
              color: "#fff",
              border: "1px solid #ef4444",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App  