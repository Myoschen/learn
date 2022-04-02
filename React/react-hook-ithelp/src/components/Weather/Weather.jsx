import React, {useState, useEffect, useMemo} from 'react';
import WeatherCard from './WeatherCard';
import WeatherSetting from './WeatherSetting';
import useWeatherApi from './hooks/useWeatherApi';
import { findLocation } from './utils';

// 載入 styled
import styled, { ThemeProvider } from 'styled-components';


// 匯入日出日落時間
import sunriseAndSunsetData from "./sunrise-sunset.json";

// 定義帶有 styled 的 component
const Container = styled.div`
    background-color: ${({theme}) => theme.backgroundColor};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const theme = {
    light: {
        backgroundColor: '#ededed',
        foregroundColor: '#f9f9f9',
        boxShadow: '0 1px 3px 0 #999999',
        titleColor: '#212121',
        temperatureColor: '#757575',
        textColor: '#828282',
    },
    dark: {
        backgroundColor: '#1F2022',
        foregroundColor: '#121416',
        boxShadow:
          '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
        titleColor: '#f9f9fa',
        temperatureColor: '#dddddd',
        textColor: '#cccccc',
    },
};

const getMoment = (locationName) => {
    const location = sunriseAndSunsetData.find(data => data.locationName === locationName);
    if (!location) return null; // 找不到就回傳 null
    const now = new Date();
    const nowDate = Intl.DateTimeFormat('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(now).replace(/\//g, '-');
    const locationDate = location.time && location.time.find(time => time.dataTime === nowDate);
    const sunriseTimestamp = new Date(`${locationDate.dataTime} ${locationDate.sunrise}`).getTime();
    const sunsetTimestamp = new Date(`${locationDate.dataTime} ${locationDate.sunset}`).getTime();
    const nowTimestamp = now.getTime();
    return sunriseTimestamp <= nowTimestamp && nowTimestamp <= sunsetTimestamp ? 'day' : 'night';
}

// 把上面定義好的 styled-component 當成組件使用
const Weather = () => {

    const storageCity = localStorage.getItem('cityName');

    const [currentCity, setCurrentCity] = useState(storageCity || '臺北市');
    const [currentPage, setCurrentPage] = useState('WeatherCard');
    const [currentTheme, setCurrentTheme] = useState('light');
    
    const currentLocation = findLocation(currentCity) || {};
    
    // 把 currentLocation 當成參數輸入 useWeatherApi 中
    const [weatherElement, fetchData] = useWeatherApi(currentLocation);
    const moment = useMemo(() => getMoment(currentLocation.cityName), [currentLocation.cityName]);


    // 根據 moment 改變 theme
    useEffect(()=> {
        setCurrentTheme(moment === 'day' ? 'light' : 'dark');
    }, [moment]);

    useEffect(() => {
        localStorage.setItem('cityName', currentCity);
    }, [currentCity]);

    return (
        <ThemeProvider theme={theme[currentTheme]}>
            <Container>
                {currentPage === 'WeatherCard' && (
                    <WeatherCard 
                        cityName={currentLocation.cityName}
                        weatherElement={weatherElement}
                        moment={moment}
                        fetchData={fetchData}
                        setCurrentPage={setCurrentPage}
                    />
                )}
                {currentPage === 'WeatherSetting' && (
                    <WeatherSetting 
                        cityName={currentLocation.cityName}
                        setCurrentCity={setCurrentCity}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </Container>
        </ThemeProvider>
    );
}

export default Weather;