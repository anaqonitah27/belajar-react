import { useState } from 'react';
import Header from './component/Header';

function App() {
  const [like, setLikes] = useState(0);

  function handleClick(){
    setLikes(like+1);
  }

  return(
    <div>
      <Header/>
      <button onClick={handleClick}>Like ({like})</button>
    </div>
  );
}

export default App
 