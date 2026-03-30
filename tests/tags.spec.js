import{test,expect} from '@playwright/test'

test("test_one @reg",async()=>{
    console.log("test one executed successfully")
})

test("test_two @smoke",async()=>{
    console.log("test two executed successfully")
})

test("test_three @reg",async()=>{
    console.log("test three executed successfully")
})

test("test_four @smoke",async()=>{
    console.log("test four executed successfully")
})

test("test_five @reg @smoke",async()=>{
    console.log("test five executed successfully")
})

