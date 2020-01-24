import React from "react";

export default function SearchForm({
  onHandleFormSubmit,
  onHandleSearchInputChange
}) {
  return (
    <form onSubmit={onHandleFormSubmit}>
      <input type='text' onChange={onHandleSearchInputChange} />
      <input type='submit' />
    </form>
  );
}
