// Bước 1:
import React from "react";
class TodoApp extends React.Component{
    // Chúng ta định nghĩa một React component bằng cách tạo một class 
    // và kế thừa (extend) từ Component class của thư viện React
    render(){
        // chúng ta phải sử dụng hàm render() trả về một JSX element 
        // để render giao diện lên màn hình
        return(
            // Bạn không thể trả về nhiều hơn một JSX element ngang hàng nhau. 
            // Trả về nhiều element nhưng chúng phải lồng nha, đảm bảo chỉ có duy nhất một element gốc. 
            // Có một giải pháp là bạn cho hết vào một thẻ <div>.
            <div>
                <h1>Hello from Create React App</h1>
                <p>I am in React Component!</p>
            </div>
        );
    }
}
export default TodoApp;