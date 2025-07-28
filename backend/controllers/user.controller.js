import '../models/connection.js';
import userSchemaModel from '../models/user.model.js';
import rs from 'randomstring';
import jwt from 'jsonwebtoken';

export const  save = async(req,res) => {
    const users = await userSchemaModel.find();
    const l =users.length;
    const _id=l==0?1:users[l-1]._id+1;

    const userDetails= {...req.body,"_id":_id,"role":"user","status":1,"info":Date()}

    try{
        await userSchemaModel.create(userDetails);
        res.status(201).json({"status":true});
    }
catch(error){
    res.status(500).json({"status":false})
}
}
 
export const fetch=async(req,res)=>{
   var user=await userSchemaModel.find(req.query);
 
   if(user.length!=0)
     res.status(200).json(user);
   else
     res.status(404).json({"status":"Resource not found"});
  };
   
export const login = async(req,res) => {
    var condition_obj = {...req.body,"status":1};

    var userList=await userSchemaModel.find(condition_obj);

    if(userList.length != 0){
        const payload =userList[0].email;
        const key = rs.generate(50);
        const token = jwt.sign(payload,key)
        res.status(200).json({"token":token,"userDetails":userList[0]})
    }
    else{
        res.status(500).json({"token":"error"})
    }
} 