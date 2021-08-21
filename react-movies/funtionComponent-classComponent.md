# functional => Stateless

```
    function App(){
        return (
            <h1>Hello world!</h1>
        )
    }
```

1. Viết giống tên hàm
2. Được khai báo thành phần với chữ cái đầu tiên viết hoa

# class => Statefull

```
    class App extends React.Component {
        render(){
            return <h1>Hello world!</h1>
        }
    }
```

1. Là một lớp kế thừa từ React.Component
2. Render: khai báo phương thức giao diện người dùng
3. Chỉ có các thành phần lớp mới có thể sử dụng trạng thái, thực thi một hàm, khi tải thành phần, thực thi các chức năng trước khi hủy thành phần,...


# react hooks
1. Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.
2. Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class
3. Được viết trong functional
