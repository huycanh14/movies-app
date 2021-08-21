import { useEffect, useState } from "react";

export default function UseEffectExamples() {
    const [clicks, setClicks] = useState(0);
    useEffect(() => {
        // Executed immediately => Thực hiện khi load component
        console.log("component loaded");

        return () => {
            // Run before the component is destroyed => Thực hiện trước khi component bị phá hủy
            console.log("The component will be destroyed");
        };
    }, []); // đặt 1 mảng trống (đặt danh sách phụ thuộc)=> chỉ chạy 1 lần, để tránh lặp lại nhiều lần khi value thay đổi => component thay đổi . Tránh việc useEffect đang là một method giống như hàm componentDidUpdate vậy

    useEffect(() => {
        document.title = `${clicks} times`;
    }, [clicks]);  // chỉ ra rằng sự phụ thuộc của dữ liệu người dùng này, biến trạng thái này => Chỉ chạy trong một số trường hợp nhất định như khi cập nhật lại trạng thái của biến trạng thái

    return (
        <>
            <h1>UseEffect Examples</h1>
            <button onClick={() => setClicks(clicks + 1)}>
                You have clicked {clicks} times
            </button>
        </>
    );
}
