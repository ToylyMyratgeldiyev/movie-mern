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

const ok = (res,message) => responseWithData(res, 200,data)

const created = (res,data) => responseWithData(res,201,data)

const unauthorize = (res) => responseWithData(res,401,{
    status: 401,
    message: "Unathorized"
})


const notfound = (res) => responseWithData(res,404,{
    status: 404,
    message: "Resoursed not found"
})

export default {
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notfound
}