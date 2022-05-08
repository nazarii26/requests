import './App.css';
import { Get } from './components/Get';
import { Post } from './components/Post';
import { Put } from './components/Put';
import { Patch } from './components/Patch';
import { Delete } from './components/Delete';

function App() {

  return (
    <>
      <Get />
      <Post />
      <Put />
      <Patch />
      <Delete />
    </>
  );
}

export default App;
