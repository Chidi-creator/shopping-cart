import useFetch from "../../useFetch";
import { useNavigate } from "react-router";

const Contents = () => {
  const navigate = useNavigate();
  const {
    data: categories,
    error,
    loading,
  } = useFetch("https://fakestoreapi.com/products/categories");

  const imageUrl = [
    {
      image:
        "https://media.istockphoto.com/id/1352617739/photo/set-of-different-home-appliances-with-vacuum-cleaner-on-yellow-background.jpg?s=612x612&w=0&k=20&c=XO67Iq4C6v-paKsHzjhs79uHZrHETAj2o_xS3LBBiLY=",
      alt: "Electronics Section",
    },

    {
      image:
        "https://media.istockphoto.com/id/1394289138/photo/workplace-of-a-jeweler-tools-and-equipment-for-jewelry-work-on-an-metal-desktop-jeweller-at.jpg?s=612x612&w=0&k=20&c=ODZKZI4O84Rp6IiLJkQKoh0O6mITQeJaU8xV7WVOufk=",
      alt: "Jewlery Section",
    },

    {
      image:
        "https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.jpg?s=612x612&w=0&k=20&c=wNFc6otEA7CmR5vsWc4Sn7Pu4KqNd8VJtYlNV-fVs6w=",
      alt: "Men's clothing Section",
    },

    {
      image:
        "https://media.istockphoto.com/id/1360648166/photo/classic-business-style-of-clothing.jpg?s=612x612&w=0&k=20&c=2jqW59J49elWzKqcWoNeGIDWg0YR1_H94F0rrzSBRK0=",
      alt: "Women's Clothing Section",
    },
  ];

  return (
    <div className="contents">
      {error && <div className="error">{error.message}</div>}
      {loading && <div className="loader"></div>}
      {categories &&
        categories.map((category, index) => {
          return (
            <div
              className="item"
              key={index}
              onClick={() => {
                navigate(`/${category}`);
              }}
            >
              <div className="pic-header">{category}</div>

              <div className="pic">
                <img src={imageUrl[index].image} alt={imageUrl[index].alt} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Contents;
