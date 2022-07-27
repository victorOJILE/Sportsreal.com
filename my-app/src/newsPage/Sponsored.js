import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSmall from "../components/loadingSmall";
function Sponsored({ readmore }) {
  let [imgDiv, setImgDiv] = useState({
    height: "10rem",
    backgroundColor: "lightgrey",
  });
  let handleSetImgDiv = () => {
    setImgDiv({});
  };
  let key = 300;
  return (
    <section className="bg">
      <div>
        <div className="related-post related-post2">You may also like:</div>
      </div>
      {readmore.length < 1 ? (
        <LoadingSmall />
      ) : (
        <div className="" id="also-like">
          {readmore.map((sponsored) => {
            return (
              <div className="sponsored-span" key={key++}>
                <img src={sponsored.imgsrc} style={imgDiv} onLoad={handleSetImgDiv} />
                <Link to={sponsored.ahref}>{sponsored.ainnerText}</Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Sponsored;
