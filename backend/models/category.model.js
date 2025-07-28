import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  gitlink: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true,
  },
    livelink: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required: [true,"Category icon name is required"],
    lowercase: true,
    trim: true
  }
});

// Apply the uniqueValidator plugin to CategorySchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('project_collections',CategorySchema);

export default CategorySchemaModel;



