import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

// export const ThemeContext = createContext({
//   theme: null,
//   setTheme: () => {},
// });

export default function App() {
  // const [theme, setTheme] = useState("light");

  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}
