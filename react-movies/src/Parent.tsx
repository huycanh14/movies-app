import { useContext } from "react";
import Child from "./Child";
import ValueContext from "./ValueContext";

export default function Parent() {
    const value = useContext(ValueContext);
    return (
        <>
            From the parent: {value ? 'The value is true' : 'The value is false'}
            <Child />
        </>
    );
}