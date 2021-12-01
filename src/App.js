import { useState } from 'react'
import List from './components/List'

function App() {

  // State
  const [list, setList] = useState([])

  return (
    <div className="App">
      <main className="main">
        <h1 className="header">Grocery Bud</h1>
        <form className="form">
          <input type="text" className="input" placeholder="e.g. chicken" />
          <button className="button" type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
