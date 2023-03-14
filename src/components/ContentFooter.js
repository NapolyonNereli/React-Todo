import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveFilter, selectTodos } from '../redux/todos/todosSlice'

function ContentFooter() {
    const items = useSelector(state => state.todos.items)
    const itemsLeft = items.filter(item => !item.completed).length

    const dispatch = useDispatch();
    const activeFilter = useSelector(selectTodos);

  return (
    <footer className='footer'>
        <span className='todo-count'>
            <strong>{itemsLeft} </strong>
            item{itemsLeft > 1 && "s"} left
        </span>
        <ul className='filters'>
            <li>
                <a  
                    href='#/'
                    onClick={() => dispatch(changeActiveFilter('all'))} 
                    className={activeFilter === "all" ? "selected": ""}>
                    All
                </a>
            </li>
            <li>
                <a 
                    href='#/'
                    onClick={() => dispatch(changeActiveFilter('active'))}
                    className={activeFilter === 'active' ? "selected": ""}
                >
                    Active
                </a>
            </li>
            <li>
                <a
                    href='#/'
                    onClick={() => dispatch(changeActiveFilter('completed'))}
                    className={activeFilter === 'completed' ? 'selected': ""}
                >
                    Completed
                </a>
            </li>
        </ul>
        <button className='clear-completed'></button>
    </footer>
  )
}

export default ContentFooter