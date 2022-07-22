const container=document.querySelector('#root');

//class component
class Clock extends React.Component{
    render(){
        return(
            <h1>Hello {new Date().toLocaleTimeString()}</h1>
        );
    }
}
//end class component

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
        <Clock></Clock>
    </div>,
container);

// class component this.props
// functional component props

