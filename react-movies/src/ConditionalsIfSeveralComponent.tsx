import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";

export default function ConditionalsIfSeveralComponent() {
    const [selectedRate, setSelectedRate] = useState(1);

    function displayResult() {
        if (selectedRate === 1)
            return <span>Noooo!</span>
        else if (selectedRate === 2)
            return (
                <>
                    <input type="text" />
                </>
            );
        else if (selectedRate === 3)
            <><Simple /></>
        else
             return <span>Thanks!</span>
    }
    return (
        <>
            <h1>Conditionals If example</h1>
            <div>Rate this website</div>
            {/* <SelectNumber maxValue={10} onSelected={ setSelectedRate}/> */}
            <SelectNumber maxValue={10} onSelected={(value) => {
                setSelectedRate(value);
            }}/>
            <div>
                {displayResult()}
            </div>
        </>
    )
}