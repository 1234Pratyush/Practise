import Todo from "../models/todo.model.js";


export const create = async(req,res)=>{
    try{
        const {title,description,status} = req.body;

        const todo = await Todo.create({
            title,description,status,createdBy:req.user._id
        })

        const populatedTodo = await Todo.findById(todo._id).populate(
          "createdBy",
          "name",
        );
        return res
          .status(200)
          .json({
            success: true,
            message: "Todo created successfully",
            todo: populatedTodo,
          });
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }
}