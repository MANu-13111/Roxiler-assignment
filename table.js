import React , {Component} from "react";
import './Table.css';
import axios from "axios";

class Table extends Component{
    state = { todos: [] };
    async componentDidMount(){
        let result = await axios.get('http://jsonplaceholder.typicode.com/todos')
        this.setState({todos:result.data})
    }

   
    render(){
        return(
            <div>
                <div className="main1">
                    <div className="h4">
                       <h4>Todos</h4>
                    </div>
                    <div className="search">
                       <input type="text" placeholder='search' />
                    </div>
                    
                </div>
               
                
                <table>
                    <tbody>
                        <tr>
                        <th><h4>ToDo ID</h4></th>
                        <th><h4>Title</h4></th>
                        <th><h4>Status</h4></th>
                        <th><h4>Action</h4></th>
                        </tr>
                        {this.state.todos.map((todo)=> 
                        <tr key={todo.id}>
                        <td> {todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed === true ? "Complete" : "Incompete"}</td>
                        <td><button type="button" className="button">View User</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
