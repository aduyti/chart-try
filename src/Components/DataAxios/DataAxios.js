import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyBarCharts from '../Charts/MyBarCharts';

const DataAxios = () => {
    const [phn, setPhn] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iPhone')
            .then(data => setPhn(data.data.data));
    }, [])
    return (
        <div>
            <h1>Total {phn.length}</h1>
            <MyBarCharts myData={phn}></MyBarCharts>
        </div>
    );
};

export default DataAxios;