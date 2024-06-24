import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  // State to hold the list of comments
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "Great job!",
      rating: 4,
    },
  ]);

  // Function to add a new comment to the list
  const addNewComment = (comment) => {
    setComments((currentComments) => [...currentComments, comment]);
    console.log("Added new comment");
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {/* Map through the comments array and display each comment */}
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(Rating: {comment.rating})</span>
            <p>{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      {/* Form component to add new comments */}
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
