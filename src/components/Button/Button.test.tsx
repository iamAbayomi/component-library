import React from "react"
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'


import Button  from "./Button"


describe("Testing Button Component", ()=> {
    test("Check the button text ", ()=> {
        render(<Button width={'132px'} height={'42px'} color={'blue'} 
            margin={'20px 0px'} backgroundColor={'white'} buttonText={'Secondary'} />)
        expect(screen.getByRole('button', {name: 'Secondary'})).toBeVisible()
    })
})