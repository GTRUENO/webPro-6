import { useEffect, useState } from 'react'

const DayWeather = () => {
  const today = new Date()
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${week[today.getDay()]}요일`
  const [weather, setWeather] = useState(null)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const a='1'
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c80e0084d2561acf60206541abf57eb2`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    console.log(data)
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>{formattedDate} 날씨</h1>
      <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather icon" />
    </div>
  )
}

export default DayWeather