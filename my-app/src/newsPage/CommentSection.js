import React, { useState } from "react";
import Newsletter from "./Newsletter";
function CommentSection() {
    let [checkState, setCheckState] = useState(true);
    let handleCheckChange = () => {
        (checkState === true)? setCheckState(false): setCheckState(true);
    };
  return (
    <div className="comm-newsl">
      <section id="comment-section">
        <div>Drop a comment:</div>
        <form action="" method="post" autoComplete="on">
          <div className="form-group">
            <textarea
              className="form-control"
              name="userComment"
              id="textarea"
              placeholder="Enter comments here..."
              required=""
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="username">Enter user name</label>
            <input
              type="text"
              id="username"
              className="form-control"
              maxLength="35"
              name="userName"
              placeholder="Enter your name..."
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Enter email address</label>
            <input
              type="email"
              id="emailAddress"
              className="form-control"
              maxLength="45"
              name="userEmail"
              placeholder="Email Address..."
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              className="form-check-inline"
              name="save-email"
              id="save-email" 
              checked={checkState}
              onChange={handleCheckChange}
            />
            <label htmlFor="save-email">
              Save your email for next time you comment
            </label>
          </div>
          <button type="submit" id="submit-comment">
            Submit
          </button>
        </form>
      </section>
      <Newsletter />
    </div>
  );
}

export default CommentSection;
