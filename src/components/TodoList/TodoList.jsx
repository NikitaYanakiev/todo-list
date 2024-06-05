import { useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteAll } from "../../store/todosSlice";
import "./TodoList.scss";

function TodoList() {
    const { data, isLoading } = useSelector((store) => store.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    let todoList;
    if (data.length) {
        todoList = data.map((item) => {
            return <ListItem todo={item.todo} id={item.id} key={item.id} />;
        });
    } else {
        todoList = <li className="todo-list__message">No todos</li>;
    }

    return (
        <div className="todo-list">
            <h3 className="title title_sub">TODOS</h3>
            <ul className="todo-list__container">
                {isLoading && <li className="todo-list__message">...LOADING</li>}
                {!isLoading && todoList}
            </ul>
            <div className="todo-list__footer">
                <span className="todo-list__count">
                    Всего: <span>{data?.length}</span>
                </span>
                <input
                    type="button"
                    value="Clean up"
                    className="btn btn_clean"
                    onClick={() => dispatch(deleteAll())}
                />
            </div>
        </div>
    );
}

export default TodoList;
