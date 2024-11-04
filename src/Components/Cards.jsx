import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};
    console.log(coffee);
    return (
        <div className="flex relative gap-6">
            <Link to={`/coffee/${id}`}
             className="transition hover:scale-105 rounded-xl overflow-hidden gap-6 shadow-xl">
                <figure className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name : {name}</h1>
                    <p>Category : {category}</p>
                    <p>Type : {type}</p>
                    <p>Origin : {origin}</p>
                    <p>Rating : {rating}</p>
                    <p>Popularity : {popularity}</p>
                </div>
            </Link>
        </div>
    );
};

export default Cards;