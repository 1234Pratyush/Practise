import Body from "./Components/Body"
import { Route,Routes } from "react-router-dom"
import Browse from "./Components/Browse";
import { Toaster } from "@/components/ui/sonner";

function App(){
  return (
    <div>
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
      </Routes>
    </div>
  );
}

export default App  