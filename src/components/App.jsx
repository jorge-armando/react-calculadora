import React, { Component } from 'react'
import Calculator from './main/Calculator';
import './App.css'

export default class App extends Component{
    render(){
        return(
            <>
                <h1>Calculadora</h1>
                <Calculator />
            </>
        )
    }
}