import "./styles.css";

import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import CustomHook from "./components/CustomHook";
import UseRef from "./components/UseRef";
import MemoParent from "./components/MemoParent";

export default function App() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <h2>React Hooks - M0920</h2>

      <hr />
      <UseState />
      <br />
      <hr />
      <UseEffect />
      <br />
      <hr />
      <CustomHook />
      <br />
      <hr />
      <UseRef />
      <br />
      <hr />
      <h2>memo / useMemo / useCallback</h2>
      <MemoParent />
    </div>
  );
}
