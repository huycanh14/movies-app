import { useState } from "react";

export default function Events() {
    // let canSee = true;
    const [canSee, setCanSee] = useState(false);
    const [text, setText] = useState('');

    function handCheckboxChanged() {
        // alert("My value was changed");    
        // canSee = !canSee;
        setCanSee(!canSee);
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value);
        setText(e.currentTarget.value);
    }

    return (
        <>
            <h1>Conditionals Example</h1>
            <input type="checkbox" onChange={handCheckboxChanged} />
            <div>
                <button onClick={() => {
                    alert('I have been clicked');
                }}>Click me</button>
            </div>
            <div>
                <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            </div>
            {canSee ? <div>You are seeing the secret</div> : <span>You are not allowed to see</span>}
            <div>
                {text}
            </div>
        </>
    )
}

