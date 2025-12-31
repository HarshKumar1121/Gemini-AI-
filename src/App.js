// import Main from "./components/main";
// import Sidebar from "./components/sidebar";
// import ContextProvider from "./context/context";

// export default function App() {
//   return (
//     <ContextProvider>
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <Main />
//       </div>
//     </ContextProvider>
//   );
// }

import Main from "./components/main";
import Sidebar from "./components/sidebar";
import ContextProvider from "./context/context";
import "./App.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </ContextProvider>
  );
}
