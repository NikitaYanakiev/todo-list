import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteItem,
    enterEditMode,
    saveEdit,
    exitEditMode,
} from "../../store/todosSlice";

function ListItem({ todo, id }) {
    const dispatch = useDispatch();
    const { isEdit, editId } = useSelector((store) => store.todos);
    const [editedTodo, setEditedTodo] = useState(todo);

    function onEdit() {
        dispatch(enterEditMode({ id }));
    }

    function onSave() {
        dispatch(saveEdit(editedTodo));
    }

    function onCancel() {
        dispatch(exitEditMode());
        setEditedTodo(todo);
    }

    return (
        <li className="todo-list__item">
            <div className="todo-list__left">
                <input
                    type="checkbox"
                    name="check"
                    id={id}
                    className="todo-list__checkbox"
                />
                <label htmlFor={id} className="todo-list__title">
                    {isEdit && editId === id ? (
                        <textarea
                            name="text-area"
                            className="todo-list__area"
                            value={editedTodo}
                            onChange={(e) => setEditedTodo(e.target.value)}
                        />
                    ) : (
                        todo
                    )}
                </label>
            </div>

            <div className="todo-list__btns">
                {isEdit && editId === id ? (
                    <>
                        <input
                            type="button"
                            value="Save"
                            className="btn btn_save"
                            onClick={onSave}
                        />
                        <input
                            type="button"
                            value="Cancel"
                            className="btn btn_cancel"
                            onClick={onCancel}
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="button"
                            value="Edit"
                            className="btn btn_edit"
                            onClick={onEdit}
                        />
                        <input
                            type="button"
                            value="Delete"
                            className="btn btn_delete"
                            onClick={() => dispatch(deleteItem({ id }))}
                        />
                    </>
                )}
            </div>
        </li>
    );
}

export default ListItem;
