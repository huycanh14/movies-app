export default function MapExample() {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr = Array(100).fill(0); // [0, 0, 0, ..., 0]
    return (
        <>
            <h1>Iteration example</h1>
            <div>Rate this website</div>
            <select name="" id="" onChange={(e) => {
                // setSelectedRate(parseInt(e.target.value, 10));
            }}>
                {/* {arr.map(number => <option key={number} value={number}>{number}</option>)} */}
                {arr.map((number, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
            </select>
        </>
    );
}