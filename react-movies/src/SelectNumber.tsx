export default function SelectNumber(props: selectNumberProps) {
    const arr = Array(props.maxValue).fill(0);
    return (
        <>
            <select name="" id="" onChange={(e) => {
                // setSelectedRate(parseInt(e.target.value, 10));
                props.onSelected( parseInt(e.target.value, 10));
            }}>
                {arr.map((_, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
                {/* arr.map((_, index) : '_': ko muốn nói gì, ko nói đén giá trị */}
            </select>
        </>
    );
}

interface selectNumberProps {
    maxValue: number;
    onSelected(value: number): void;
}

SelectNumber.defaultProps = {
    maxValue: 5
}