import { fireEvent, render, screen } from "@testing-library/react"
import { Slider } from "./Slider"

describe("Test Silder", () => {
    it("Should have Next Button", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        expect(next).toBeInTheDocument()
    })
    it("Should have Previous Button", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        fireEvent.click(next)
        let pre = screen.getByText("Pre")
        expect(pre).toBeInTheDocument()
    })
    it("Should Update Question", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        let question = screen.getByTestId("question")
        expect(question).toHaveTextContent("Question: First Question")
        fireEvent.click(next)
        expect(question).toHaveTextContent("Question: Second Question")
    })
    it("Should Update Answer", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        let answer = screen.getByTestId("answer")
        expect(answer).toHaveTextContent("Answer: First Answer")
        fireEvent.click(next)
        expect(answer).toHaveTextContent("Answer: Second Answer")
    })
    xit("Should Disable Next Button", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        fireEvent.click(next)
        fireEvent.click(next)
        fireEvent.click(next)
        expect(next).toBeUndefined()
    })

})