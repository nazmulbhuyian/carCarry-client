

const Ratting = (rattings) => {
    const ratting = rattings.rattings;
    if (ratting == 1) {
        return <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
    }
    else if (ratting == 2) {
        return <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
    }
    else if (ratting == 3) {
        return <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
    }
    else if (ratting == 4) {
        return <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
    }
    else if (ratting == 5) {
        return <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
    }
};

export default Ratting;





// import React, { useState } from 'react';

// const StarRating = () => {
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = (event) => {
//     const selectedRating = parseInt(event.target.value);
//     setRating(selectedRating);
//   };

//   return (
//     <div className="rating">
//       <input
//         type="radio"
//         name="rating"
//         id="rating-1"
//         value="1"
//         checked={rating === 1}
//         onChange={handleRatingChange}
//       />
//       <label htmlFor="rating-1" className="mask mask-star"></label>

//       <input
//         type="radio"
//         name="rating"
//         id="rating-2"
//         value="2"
//         checked={rating === 2}
//         onChange={handleRatingChange}
//       />
//       <label htmlFor="rating-2" className="mask mask-star"></label>

//       <input
//         type="radio"
//         name="rating"
//         id="rating-3"
//         value="3"
//         checked={rating === 3}
//         onChange={handleRatingChange}
//       />
//       <label htmlFor="rating-3" className="mask mask-star"></label>

//       <input
//         type="radio"
//         name="rating"
//         id="rating-4"
//         value="4"
//         checked={rating === 4}
//         onChange={handleRatingChange}
//       />
//       <label htmlFor="rating-4" className="mask mask-star"></label>

//       <input
//         type="radio"
//         name="rating"
//         id="rating-5"
//         value="5"
//         checked={rating === 5}
//         onChange={handleRatingChange}
//       />
//       <label htmlFor="rating-5" className="mask mask-star"></label>
//     </div>
//   );
// };

// export default StarRating;
