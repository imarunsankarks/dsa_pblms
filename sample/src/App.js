import Table from "./comps/table";
import Search from "./comps/search"
import { useTheme } from "./context/theme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle</button>
      <Table />
      <Search />
    </div>
  );
}
