"use client";
function Test({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  console.log(cabin.description);
  console.log(image);
  return <div>{description}</div>;
}

export default Test;
