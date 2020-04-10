const router = require("express").Router();
const db = require("../../models");

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(dbWorkout);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  console.log(body);

  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", ({ body }, res) => {
  db.Workout.find({})
    .sort({ day: 1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("PUT", req.body);
  db.Workout.update(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
    }
  )

    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
