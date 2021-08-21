import React from "react";

export default function Simple() {
    return (
        <React.Fragment>
            {/* Fragment thay thế thẻ bao ngoài. Ko làm ảnh đến component cha */}
            <h1>Hello World!</h1>
            <h2>This is a subtext</h2>
        </React.Fragment>
    ) 
}