// import { validationResult } from "express-validator";

const responseWithData = (res,statusCode,data)=>{
    return res.status(statusCode).json(data)
}

const error = (res) => responseWithData(res, 500, {
    status : 500,
    message:"Oops! Something worng!"
})

const badrequest = (res,message)=>responseWithData(res,400,{
    status:400,
    message
})

const ok = (res,message) => responseWithData(res, 200,{
    status:200,
    message
})