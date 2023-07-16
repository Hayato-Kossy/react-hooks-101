import React, {useState} from "react";
const App = props => {

    const [name, setName] = useState(props.name)
    const [price, setprice] = useState(props.price)
    const reset = () => {
        setprice(props.price)
        setName(props.name)
    }
    return (
        <div>
            <p>現在の{name}は,{price}円です</p>
            <button onClick={() => setprice(price+1)}>+1</button>
            <button onClick={() => setprice(price-1)}>-1</button>
            <button onClick={(reset)}>reset</button>
            <input value={name} onChange={e => setName(e.target.value)}></input>
        </div>
)}

App.defaultProps = {
    name: "サンプル",
    price: 1000
}

export default App;
