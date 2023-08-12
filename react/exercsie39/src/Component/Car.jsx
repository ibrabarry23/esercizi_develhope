import React, { useEffect, useRef } from "react";

function Car({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const carData = {
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
    };
    console.log(carData);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          defaultValue={initialData.model}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          defaultValue={initialData.year}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          defaultValue={initialData.color}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Car;
