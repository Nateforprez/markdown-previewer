import { useState } from 'react'; 
import Editor from './Editor';
import Previewer from './Previewer'; 
import './App.css'; 

function App() {
  const [visEditor, setVisEditor] = useState(true); 
  const [visPreviewer, setVisPreviewer] = useState(true); 
  const [msg, setMsgPreview] = useState(''); 
  const hidePreviewer = () => {
    setVisPreviewer(prev => !prev); 
  }
  const hideEditor = () => {
    setVisEditor(prev => !prev); 
  }
  const updateEditorText = (message) => {
    setMsgPreview(message); 
  }

  return (
    <>
      <div id="app-container">
        <Editor visibility={visEditor} parentVis={hidePreviewer} update={updateEditorText}/> 
        <Previewer visibility={visPreviewer} parentVis={hideEditor} previewText={msg}/> 
      </div>
    </>
  )
}

export default App
