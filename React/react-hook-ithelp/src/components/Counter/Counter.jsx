import React from 'react';
import { useState } from 'react';
import './counter.css';

// Arrow Function
// React Component: 組件可以使開發者輕鬆重複使用
// 組件的命名方式會採用大寫駝峰: Counter, Button
// 而在 JSX 的 html 屬性則會採小寫駝峰
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
        // 要使用 className 替代原本的 class
        // 因為 class 在 JavaScript 內是保留字
        <div className='container'>
            <div 
                style={{visibility: count >= 10 && 'hidden'}}  
                className='chevron chevron-up' 
                // 若是函式後方有加上小括號則會立即執行
                onClick={handleIncrement}
            />
            <div className='number'>{count}</div>
            <div 
                style={{visibility: count <= 0 && 'hidden'}} 
                className='chevron chevron-down' 
                onClick={handleDecrement}
            />
        </div>
    );
}

export default Counter;