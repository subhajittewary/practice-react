import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { from } from "rxjs";
import { LoggerContext } from "./Context.tsx";

const Rating = ({ totalRatings, defRatings }) => {
  const contextValue = useContext(LoggerContext);
  console.log(contextValue);
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(defRatings);

  const dispatch = useDispatch();

  function selectRating(rating) {
    setRating(rating);
  }

  const data = useSelector((state) => state);

  console.log("datataa----.", data);

  useEffect(() => {
    async function fetchdata() {
      // const observable = await axios.get(
      //   "https://jsonplaceholder.typicode.com/todos/"
      // );
      // dispatch({
      //   type: "FETCH_SUCCESS",
      //   payload: observable.data,
      // });
    }

    fetchdata();

    //  observable.subscribe(
    //   data=>{
    //    console.log(data);
    //  },
    //  err=>console.log(err)
    // )
  }, []);

  return (
    <div className="container">
      {[...Array(totalRatings)].map((_, i) => {
        return (
          <span
            className={`rating-item ${
              i + 1 <= (hover || rating) ? "yellow" : "gray"
            }`}
            key={i}
            onClick={() => selectRating(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
