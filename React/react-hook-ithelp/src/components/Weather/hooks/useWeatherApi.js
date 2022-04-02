import { useState, useEffect, useCallback } from "react";

const fetchCurrentWeather = (locationName) => {
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${process.env.REACT_APP_AUTH_TOKEN}&locationName=${locationName}`)
        .then(res => res.json())
        .then(data => {
            const locationData = data.records.location[0];
            const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                    if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
                        neededElements[item.elementName] = item.elementValue;
                    }
                    return neededElements;
                },
                {}
            );

            return {
                observationTime: locationData.time.obsTime,
                locationName: locationData.locationName,
                temperature: weatherElements.TEMP,
                windSpeed: weatherElements.WDSD,
                humid: weatherElements.HUMD,
            };
        });
};

const fetchWeatherForecast = (cityName) => {
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.REACT_APP_AUTH_TOKEN}&locationName=${cityName}`)
        .then(res => res.json())
        .then(data => {
            const locationData = data.records.location[0];
            const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                    if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                        neededElements[item.elementName] = item.time[0].parameter;
                    }
                    return neededElements;
                },
                {}
            );

            return {
                description: weatherElements.Wx.parameterName,
                weatherCode: weatherElements.Wx.parameterValue,
                rainPossibility: weatherElements.PoP.parameterName,
                comfortability: weatherElements.CI.parameterName,
            };
        });
};

const useWeatherApi = (currentLocation) => {

    const { locationName, cityName } = currentLocation;
    const [weatherElement, setWeatherElement] = useState({
        observationTime: new Date(),
        locationName: '',
        humid: 0,
        temperature: 0,
        windSpeed: 0,
        description: '',
        weatherCode: 0,
        rainPossibility: 0,
        comfortability: '',
        isLoading: true,
    });

    const fetchData = useCallback(() => {
        const fetchingData = async () => {
            // Promise.all 等待兩個 API 取得回應才會繼續往下執行
            const [currentWeather, weatherForecast] = await Promise.all([
                fetchCurrentWeather(locationName),
                fetchWeatherForecast(cityName),
            ]);
            setWeatherElement({
                ...currentWeather,
                ...weatherForecast,
                isLoading: false,
            });
        }
        setWeatherElement(prevState => ({...prevState, isLoading: true}));
        fetchingData();
    }, [locationName, cityName]);

    // 從中央氣象局 API fetch data 
    // 說明：一旦 locationName 或 cityName 改變時，fetchData 就會改變，此時 useEffect 內的函式就會再次執行，拉取最新的天氣資料
    useEffect(()=>{
        console.log('execute function in useEffect');
        fetchData();
    }, [fetchData]);

    return [weatherElement, fetchData];
};

export default useWeatherApi;