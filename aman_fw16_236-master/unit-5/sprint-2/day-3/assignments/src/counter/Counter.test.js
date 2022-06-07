import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe("Testing Counter", () => {
    it("Should have Increment Button", () => {
        render(<Counter />)
        let incBtn = screen.getByText("ADD")
        expect(incBtn).toBeInTheDocument();
    })
    it("Should have Decrement Button", () => {
        render(<Counter />)
        let decBtn = screen.getByText("REDUCE")
        expect(decBtn).toBeInTheDocument();
    })
    it("Should have Increment", () => {
        render(<Counter />)
        let div = screen.getByTestId("CounterDiv")
        let incBtn = screen.getByText("ADD")
        expect(div).toHaveTextContent("0")
        fireEvent.click(incBtn)
        expect(div).toHaveTextContent("5")

    })
    it("Should have Decrement", () => {
        render(<Counter />)
        let div = screen.getByTestId("CounterDiv")
        let decBtn = screen.getByText("REDUCE")
        expect(div).toHaveTextContent("0")
        fireEvent.click(decBtn)
        expect(div).toHaveTextContent("-5")

    })
})