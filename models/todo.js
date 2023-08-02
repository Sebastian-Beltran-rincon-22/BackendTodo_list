const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: {
      type: String,
      required: true,
      maxLength: 50
    },
    description: {
      type: Schema.Types.String,
      require: true,
      maxLength: 150
    },
    responsible: {
      type: Schema.Types.String,
      ref: "Responsible",
      require: true,
      maxLength: 50
    },
    dueData: {
      type: Schema.Types.String,
      require: true,
      default: true
    }
})


module.exports = mongoose.model("todo", TodoSchema)

