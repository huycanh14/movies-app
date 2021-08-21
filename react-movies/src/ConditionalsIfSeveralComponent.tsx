import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";
import ProjectContent from "./ProjectContent";

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
            <SelectNumber
                selectedContent={(value)=> `Select ${value}`}
                onSelected={(value) => {
                setSelectedRate(value);
            }}/>
            {/* <div>
                {displayResult()}
            </div> */}
            <ProjectContent bottomPart={<><span>This is the end</span></>}>
                <>
                    <Simple />
                    <button onClick={() => console.log('I was clicked')}>This is a button as a parameter</button>
                </>
            </ProjectContent>
        </>
    )
}