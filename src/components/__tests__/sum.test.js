import { Sum } from "../Sum"

test("This is basic testing for simple sum function",() => {
    const result = Sum(5,5)

    //Assertion
    expect(result).toBe(10)
})