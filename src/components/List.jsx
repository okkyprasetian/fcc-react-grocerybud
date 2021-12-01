import { MdEdit } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

function List({ e, index, deleteItem, activateEdit }) {
    return (
        <div className="list">
            <p className="list-left">{e}</p>
            <p className="list-right">
                <MdEdit className="edit hover" onClick={() => activateEdit(index)} />
                <FaTrash className="delete hover" onClick={() => deleteItem(index)} />
            </p>
        </div>
    );
}

export default List;