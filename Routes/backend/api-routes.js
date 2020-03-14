const router = require ("express").Router();
const db = require("../models")

module.exports = app => {
    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
           res.json(dbWorkout);
            })
            .catch(err => {
            res.json(dbWorkout);
        });
    });

    router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status.json(err);
    });
});

router.get("/api/workouts", ({ body }, req, res) => {
    db.Workout.find({})
    .sort({ day:  1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status.json(err);
    });
    });

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.Update(req.params.id, {
      $push: { exercises: req.body }
    })
     
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status.json(err);
      });
  });
  
  module.exports = router;
