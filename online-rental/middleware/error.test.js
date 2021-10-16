const error = require("./error")
// @ponicode
describe("error", () => {
    test("0", () => {
        let callFunction = () => {
            error({ message: "This is an exception, voilà" }, "https://", { status: () => 500 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            error({ message: "The line-by-line profiler can only be used in dev." }, "ponicode.com", { status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            error({ message: "Warning: " }, "https://api.telegram.org/", { status: () => 404 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            error({ message: "the specified credentials were rejected by the server" }, "https://", { status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            error({ message: "Ran out of iterations" }, "https://twitter.com/path?abc", { status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            error({}, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
