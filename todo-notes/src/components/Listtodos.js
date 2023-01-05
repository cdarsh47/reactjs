export default function Listtodos(props){
    const parentDiv = {
        display: 'inline-block',
        width: '100%',
     }
    return(
        <div style={parentDiv}>
        {
            props.notes.length === 0 ? 'No notes to display' :
        
            props.notes.map((todo,index) => 
                <div key={index} className="todos-list">
                    <div className="todos-content">
                        <p className='title'>{todo.title}</p>
                        <div className="todo-description">{todo.description}</div>
                    </div>
                    <button onClick={() => props.removeid(todo.id)}>delete</button>
                </div>
            )
        }    
        
        </div>
    )
}