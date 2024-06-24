import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: name === "rating" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username.trim() && formData.remarks.trim()) {
      addNewComment(formData);
      setFormData({
        username: "",
        remarks: "",
        rating: 5,
      });
    } else {
      alert("Username and Remarks cannot be empty!");
    }
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"
          />
        </div>
        <br />
        <div>
          <label htmlFor="remarks">Remarks:</label>
          &nbsp;&nbsp;
          <textarea
            name="remarks"
            id="remarks"
            value={formData.remarks}
            placeholder="Add a few remarks"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="rating">Rating:</label>
          &nbsp;&nbsp;
          <input
            type="number"
            placeholder="rating"
            min={1}
            max={5}
            value={formData.rating}
            onChange={handleInputChange}
            id="rating"
            name="rating"
          />
        </div>
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
