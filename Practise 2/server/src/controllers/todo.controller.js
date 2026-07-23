import Todo from "../models/todo.model.js";

export const create = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const todo = await Todo.create({
      title,
      description,
      status,
      createdBy: req.user._id,
    });

    const populatedTodo = await Todo.findById(todo._id).populate(
      "createdBy",
      "name",
    );
    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo: populatedTodo,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({ createdBy: req.user._id }).populate(
      "createdBy",
      "name",
    );

    return res
      .status(200)
      .json({ success: true, message: "All todos", data: todo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTodo = await Todo.findOneAndDelete({_id:id,createdBy:req.user._id});
    return res
      .status(200)
      .json({ success: true, message: "Todo Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ success: true, message: error.message });
  }
};
