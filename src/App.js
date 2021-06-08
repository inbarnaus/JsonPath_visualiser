import React,{useState} from 'react';
import FileSelect from './Components/FileSelect';
import TreeViewer from './Components/TreeViewer';

function App() {
  const [tree, setTree] = useState({});

  function handleTree(json){
    setTree(json)
  }
     return (
      <div>
        <FileSelect
          handleTree={handleTree}
        />
        {Object.keys(tree).length !== 0 &&
        <div>
          <TreeViewer json={tree}/>
        </div>}
      </div>
    );
}

export default App;
