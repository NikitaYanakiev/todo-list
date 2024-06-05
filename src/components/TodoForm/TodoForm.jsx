import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/todosSlice";
import './TodoForm.scss';

function TodoForm() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(addItem(inputValue));
            setInputValue(''); 
        }
    }

    return (
        <form action="#" className="todo" onSubmit={addTodo}>
            <label htmlFor="todo" className="title">
                todo
            </label>
            <div className="todo__container">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    className="todo__input"
                    placeholder="Write todo..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="submit" value="Add" className="btn btn_add" />
            </div>
        </form>
    );
}

export default TodoForm;
