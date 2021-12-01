import { useState } from 'react'
import List from './components/List'

function App() {

  // State
  const [list, setList] = useState([])
  const [item, setItem] = useState('')
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  // Set State
  const handleSubmit = e => {

    e.preventDefault()
    if (!edit) {
      setList([...list, item])
      setItem('')
    } else {
      const newList = [...list]
      newList[editIndex] = item
      setList(newList)
      setEdit(false)
      setItem('')
    }
  }
  const clearList = () => {
    setList([])
    setEdit(false)
    setItem('')
  }
  const deleteItem = index => {
    const newList = [...list]
    newList.splice(index, 1)
    console.log(index)
    setList(newList)
  }
  const activateEdit = index => {
    setEdit(true)
    setEditIndex(index)
    setItem(list[index])
  }

  return (
    <div className="App">
      <main className="main">
        <h1 className="header">Grocery Bud</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="input" value={item} placeholder="e.g. chicken" onChange={e => setItem(e.target.value)} />
          <button className="submit" type="submit"> {edit ? 'Edit' : 'Submit'} </button>
        </form>
        {list.length > 0 &&
          <article className="lists">
            {list.map((e, index) => (<List e={e} index={index} deleteItem={deleteItem} activateEdit={activateEdit} key={index} />))}
          </article>
        }
        {list.length > 0 &&
          <div className="footer">
            <div className="clear hover" onClick={clearList}>Clear Items</div>
          </div>
        }
      </main>
    </div>
  );
}

export default App;
