import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './converter.css';

const UnitControl = () => (
    <div className='unit-control'>
        <div className='unit'>Mbps</div>
            <span className='exchange-icon'>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} size='lg'/>
            </span>
        <div className='unit'>MB/s</div>
    </div>
);

const CardFooter = (props) => {
    // 通過 props 取得父層傳遞的資料
    const { inputValue } = props;
    let criteria;

    if (!inputValue) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }

    return (
        <div 
            className='card-footer'
            style={{backgroundColor: criteria.backgroundColor}}
        >
            {criteria.title}
        </div>
    );
}

const SpeedConverter = () => {
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (e) => {
        // Destructuring Assignment
        const { value } = e.target;
        setInputValue(value);
    }
    
    return (
        <div className='container'>
            <div className='card-header'>
                Network Speed Converter
            </div>
            <div className='card-body'>
                <UnitControl />
                <div className='converter'>
                    <div className='flex-1'>
                        <div className='converter-title'>Set</div>
                        {/* ⚠️ 取得使用者輸入的內容 */}
                        <input 
                            type="number" 
                            className='input-number' 
                            min='0' 
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                    </div>
                    <span className='angle-icon' style={{marginTop: "30px"}}>
                        <FontAwesomeIcon icon={faAngleRight} size='lg'/>
                    </span>
                    <div className='text-right flex-1'>
                        <div className='converter-title'>Show</div>
                        <input 
                            type="text" 
                            className='input-number text-right' 
                            value={inputValue / 8} 
                            disabled 
                        />
                    </div>
                </div>
            </div>
            {/* 將 inputValue 傳入到 CardFooter 組件中 */}
            {/* 名稱可以自己取，不一定要一樣 */}
            <CardFooter inputValue={inputValue}/>
        </div>
    );
}

export default SpeedConverter;