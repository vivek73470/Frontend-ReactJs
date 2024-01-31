import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { GeTodosRequest, GeTodosSuccess,GeTodosError, PostTodosRequest, PostTodosError} from '../React-Redux/action';
import { store } from '../React-Redux/store';

function Todo() {
        const dispatch = useDispatch();
        console.log("h888i")
        const { todos,isLoading} = useSelector((store)=>{
                console.log(store)
                return {
                todos:store.todos,
                isLoading:store.isLoading,
                }
               
        },
        shallowEqual
        );
     

        // const isLoading = useSelector((store)=>store.isLoading)
      

        const getTodos = () => {
                // goes to reducer fn
          dispatch(GeTodosRequest())
                axios.get(`http://localhost:3500/todos`)
                        .then((r) => {
                                // successfully
                               dispatch(GeTodosSuccess(r.data))
                        })
                        .catch((e) => {
                                // error
                                dispatch(GeTodosError())
                        })

        }

        const addTodo =(title)=>{
                if(title){
                        const payload ={
                                title,
                                status:false
                        };
                        dispatch(PostTodosRequest());
                        axios.post(`http://localhost:3500/todos`,payload)
                        .then((r) =>{
                                dispatch(PostTodosRequest(r.data));
                        })
                        .catch((e)=>{
                                dispatch(PostTodosError());
                        })
                }

        }
        // fetch all the todos from the db.json file, when the component mounts.
        useEffect(() => {
                getTodos();
        }, [])

        return (
                <>
                        <h1>Todos</h1>
                        <TodoInput addTodo={addTodo} />
                        {/* {isLoading && <div>Loading...</div>} */}
                        {todos.length >0 && todos.map(item =>{
                                return (
                                        <div key={item.id} >
                                                {item.title} - {item.status ? 'True': "False"}
                                        </div>
                                )
                        })}
                </>
        )
}

export default Todo