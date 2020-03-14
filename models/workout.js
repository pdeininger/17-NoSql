const mongoose = require("mongoose");
//const opts = { toObject: { virtuals: true }, toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: { type: String, required: true },
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ],
  totalDuration: Number
});

workoutSchema.methods.setTotalDuration = function() {
  let total = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration;
  }
  this.totalDuration = total;
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
