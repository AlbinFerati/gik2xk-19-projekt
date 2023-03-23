import { Chip } from '@mui/material';

function Rating({ ratings }) {
  // const [rating, setRating] = useState([]);

  // useEffect(() => {
  //   getAll().then((ratingman) => setRating(ratingman));
  // }, []);

  return ratings ? (
    <>
      <ul>
        {ratings &&
          ratings.map((rating) => {
            return <Chip key={rating.id} label={`${rating.rating}/10`}></Chip>;
          })}
      </ul>
    </>
  ) : (
    <>Rating missing</>
  );
}

export default Rating;
