1. Dùng để xử lý các tác dụng phụ (side effects) trên các thành phần của bạn (your componet)
2. Một tác dụng phụ là bất cứ điều gì mà không liên quan đến giá trị đầu ra của thành phần
3. Với việc sử dụng nếu chúng ta có thể thực thi một phương thức khi tải thành phần và ngay trước khi nó bị hủy ==> được thực thi khi mỗi lần thành phần đó được tải, mỗi lần các thành phần đó hiển thị và khi thành phần bị phá hủy hoặc loại bỏ, chức năng dọn dẹp của useEffect đó sẽ được thực thi
4. Có thể chỉ ra các điều kiện để năng chặn nó đang được thực hiện

```
Mục đích useEffect để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component.
useEffect sẽ được gọi mỗi khi components thay đổi
```

https://viblo.asia/p/su-dung-useeffect-trong-reacthooks-1Je5EPbmlnL#_2-react-hook-va-useeffect-la-gi-1