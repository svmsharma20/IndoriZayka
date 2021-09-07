import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Poha",
    description:
      "When life gives you lemon, Get you poha plate and squeeze over it",
    price: 15.0,
  },
  {
    id: "m2",
    name: "Samosa",
    description: "Indori love triangle",
    price: 13.0,
  },
  {
    id: "m3",
    name: "Jalebi",
    description:
      "You can't buy happiness, But you can buy Jalebi and thats kinda the same",
    price: 30.0,
  },
  {
    id: "m4",
    name: "Namkeen Sev",
    description: "Not putting sev in everything, But putting everything in sev",
    price: 50.0,
  },
  {
    id: "m5",
    name: "Hot Dog",
    description: "You can't satisfy everyone, You are not Johnny hot dog",
    price: 25.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
