import { useMemo, useState } from "react";
import "./editor.css";
import SideBar from "../../components/Editor/Sidebar";
import CodeMirror from "../../components/Editor/CodeMirror";
import Output from "../../components/Editor/Output";
import MainContext from "../../MainContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Navbar } from "../../components/navbar/Navbar";

export function Editor() {
  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM internetData;", "SELECT id, first_name, last_name FROM internetData;"],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className='App-Editor'>
    <Navbar/>
      <MainContext.Provider value={contextValue}>
        <div className='content'>
          <div className='row'>
            <div className='col-md-3'>
              <SideBar />
            </div>
            <div className='col-md-9 col-12 editor-area'>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

// export default Editor;