// Extensions  :JS ,TS, JSX,TSX.

const sum = require("./index");

// import {test} from "@jest/globals".require is function that will import in nodejs.
const { test,expect,describe } = require("@jest/globals");


//1 unit of test

//describe is used to group tests together nothing else.
describe("Test Sum function with numbers", function () {
    test("Should Work on all positive number", function () {
        //Assertions.
        //left :your/actual
        //right:expected

        expect(sum(2, 2)).toBe(4);
        expect(sum(0, 0)).toBe(0);
        expect(sum(100, 0)).toBe(100);
    
        // expect(true).toBeTruthy();
        // expect("").toBeFalsy();
    })


    test("should work on all negative numbers", function () {
        expect(sum(-2, -2)).toBe(-4);
        expect(sum(-2, 0)).toBe(-2);

    })
});


describe("Test sum function with characters", function () {
    // test("it should add two characters", function () {
    //     expect(sum("a", "b")).toBe("ab");
    // });
    test("it should not work with characters", function () {
        // expect(sum("a", "b")).toBe(undefined);
        expect(sum("a", "b")).toBeUndefined();
    });
});



