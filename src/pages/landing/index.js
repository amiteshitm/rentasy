import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import Homepage from '../home/home-rentals';
// import Homepage from '../home/home-services';
import Header from './../../components/header';
// import {addTodoAction} from './../../action/todo'

import './index.scss';

function LandingPage(props) {
  // const dispatch = useDispatch();
  // const todo = useSelector(state => state.todo);

  // // Component will receive props Lifecycle
  // const previousTodo = useRef(todo);
  // useEffect( () => {
  //   const lastTodo = previousTodo.current;
  //   if(lastTodo.list.length < todo.list.length) {
  //     alert("A new todo is added");
  //   }
  //   previousTodo.current = todo;
  // }, [todo]);

  useEffect( () => {
    // Component Will mount code will go here

    return () => {
      // Component Will unmount will go here
    }
  });

  useEffect(() => {
    // Component did mount will go here
  }, []);

  // const addTodo = () => {
  //   const TodoName = `Todo number ${todo.list.length}`;
  //   dispatch(addTodoAction(TodoName));
  // }

  // const getTodos = () => {
  //   return todo.list.map( (element, index) => {
  //     return (
  //       <div key={index} className="list">
  //         {element}
  //       </div>
  //     )
  //   });
  // }

  return (
    <div>
      <Header></Header>
      {/* <div className="todo-container">
        <div className="button-container">
          <button onClick={addTodo}>Add New Todo</button>
        </div>
        <div className="list-container">
          {getTodos()}
        </div>
      </div>     */}
      <Homepage {...props}/>
    </div> 
  );
}

export default LandingPage;
