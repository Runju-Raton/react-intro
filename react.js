const container=document.querySelector('#root');
const Increment = ()=>{
    const [count,setCount] = React.useState(0); 
    return (
        <div>
            <h1>Learn React, Love React.</h1>
            <h2>Count: {count}</h2>
            <button onClick={ ()=>setCount(count+1) }>Click</button>
            <br></br><br></br><br></br>
        </div>
    )
}
   

ReactDOM.render(
    <div>
        <Increment></Increment>
        <Increment></Increment>
        <Increment></Increment>
    </div>,
container);

