import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Details = () => {
  const [ submitState, setSubmitState ] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Handle form submission
    setSubmitState(true);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Add form fields here */}
      
      <label htmlFor="name">Name:</label>
      <input data-testid = "name" placeholder = "name" type="text" {...register("name")} />
      <br />
      <label htmlFor="email">Email:</label>
      <input data-testid = "email" placeholder = "email" type="email" {...register("email")} />
      <br />

      {/* Add more form fields here */}

      <button type="submit">Submit</button>
      <h1>{submitState === true ? "Submitted" : "Not Submitted"}</h1>
    </form>
  );
};

export default Details;
