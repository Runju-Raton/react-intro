const Increment = ()=>{
    return (
        <div>
            <h1>Learn React, Love React.</h1>
            <h2>Count: 0</h2>
            <button>Click</button>
            <br></br><br></br><br></br>
        </div>
    )
}
   
const container=document.querySelector('#root');
ReactDOM.render(
    <div>
        <Increment></Increment>
        <Increment></Increment>
        <Increment></Increment>
    </div>,
container);

