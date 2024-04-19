import { Box, Button, InputBase, styled } from '@mui/material'
import React, { useState } from 'react'
import { getWeather } from '../services/api';

const Container = styled(Box)({
  background: '#445A6F',
  padding: 10
});

const Input = styled(InputBase)({
  color: '#FFF',
  marginRight: 20,
  fontSize: 18
});

const GetButton = styled(Button)({
  background: '#e67e22'
})

const Form = ({setResult}) => {

  const [data, setData] = useState({ city: '', country: '' });

  const getWeatherInfo = async() => {
    let res = await getWeather(data.city, data.country);
    setResult(res);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Input  
        placeholder="City"
        name="city"
        onChange={(e) => handleChange(e)}
      />
      <Input  
        placeholder="Country"
        name="country"
        onChange={(e) => handleChange(e)}
      />
      <GetButton  
        variant="contained"
        onClick={() => getWeatherInfo()}
      >
        Get Weather
      </GetButton>
    </Container>
  )
}

export default Form