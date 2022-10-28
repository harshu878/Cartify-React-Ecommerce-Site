import React from 'react'
import { AiFillStar , AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating,onClick, style}) => {
  return (
    <>
      {[...Array(5)].map((a, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="13px" />
          ) : (
            <AiOutlineStar fontSize="13px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating