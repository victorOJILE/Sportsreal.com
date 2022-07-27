import { useState } from "react";
import { Link } from "react-router-dom";
function NewsHead({ blogInfo, datePosted }) {
  let [topImgDiv, setTopimgdiv] = useState({height: " 12rem"});
  let [imagecred, setImageCred] = useState({display: "none"});
  let handleTopimgdiv = () => {
    setTopimgdiv({});
    setImageCred({display: "block"});
  }
  return (
    <section className="top-flex">
      <div id="flex">
        <div className="category">
          <Link to="/">Home</Link> » <a href="">{blogInfo?.category}</a> »{" "}
          {blogInfo?.topic}
        </div>
        <h1>{blogInfo?.topic}</h1>
        <div className="date">
          <div>
            <span className="clock">
              <i className="fa fa-clock-o"></i>
            </span>
            <span>{datePosted}</span>
          </div>
          <div className="author">
            By {blogInfo?.author?.name}
          </div>
        </div>
        <div className="shareDiv">
          <a href="" key={0}>
            <i className="fa fa-facebook"></i>
          </a>
          <a href="" key={1}>
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="" key={2}>
            <i className="fa fa-twitter"></i>
          </a>
          <a href="" key={3}>
            <i className="fa fa-instagram"></i>
          </a>
          <a href="" key={4}>
            <i className="fa fa-telegram"></i>
          </a>
        </div>
      </div>
        <div className="topImgDiv" style={topImgDiv}>
          <img
            src={blogInfo?.mainImage}
            alt={blogInfo?.alt}
            className="topImage"
            onLoad={handleTopimgdiv}
          />
          {blogInfo?.imageCredit !== "" ? (
            <div style={imagecred}>
              <i id="image-credit">{blogInfo?.imageCredit}</i>
            </div>
          ) : (
            ""
          )}
        </div>
    </section>
  );
}
export default NewsHead;
