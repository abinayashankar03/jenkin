import {test,expect} from '@playwright/test'

test.describe("group_1",()=>{

    test("test_one",async()=>{
        console.log("test one executed successfully");
    })

    test("test_two",async()=>{
        console.log("test two executed successfully");
    })

    test("test_three",async()=>{
        console.log("test three executed successfully");
    })
})

test.describe("group_2",()=>{

    test("test_four",async()=>{
        console.log("test four executed successfully");
    })

    test("test_five",async()=>{
        console.log("test five executed successfully");
    })
})
