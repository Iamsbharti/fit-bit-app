const muscles = [
  { id: 1, name: "shoulders" },
  { id: 2, name: "chest" },
  { id: 3, name: "arms" },
  { id: 4, name: "back" },
  { id: 5, name: "legs" },
];

const exercises = [
  {
    id: "1",
    title: "Overhead Press",
    description: "Delts exercise...",
    muscles: "shoulders",
  },
  {
    id: "2",
    title: "Dips",
    description: "Triceps exercise...",
    muscles: "arms",
  },
  {
    id: "3",
    title: "Barbell Curls",
    description: "Biceps exercise...",
    muscles: "arms",
  },
  {
    id: "4",
    title: "Bench Press",
    description: "Chest exercise...",
    muscles: "chest",
  },
  {
    id: "5",
    title: "Pull Ups",
    description: "Back and biceps exercise...",
    muscles: "back",
  },
  {
    id: "6",
    title: "Deadlifts",
    description: "Back and leg exercise...",
    muscles: "back",
  },
  {
    id: "7",
    title: "Squats",
    description: "Legs exercise...",
    muscles: "legs",
  },
];
module.exports = {
  muscles: muscles,
  exercises: exercises,
};
