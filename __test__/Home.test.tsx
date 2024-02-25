import {render, screen} from '@testing-library/react'
import Home from '@/app/page'

describe("Home", ()=>{
    it("should have a Docs text", ()=>{
        render(<Home/>)
    
        const myElment = screen.getByText("xa")
    
        expect(myElment).toBeInTheDocument()
    })

    it("should have a heading", ()=>{
        render(<Home/>)
    
        const myElment = screen.getByText("Deploy")
    
        expect(myElment).toBeInTheDocument()
    })
})


