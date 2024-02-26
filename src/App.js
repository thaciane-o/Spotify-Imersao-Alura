import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
