import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";

const Coffee = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-thin">Sort Coffee's by Popularity & Rating-&gt;</h1>
                </div>
                <div className="space-x-4">
                    <button className="btn btn-warning" >Sort By Popularity</button>
                    <button className="btn btn-warning">Sort By Rating</button>
                </div>
            </div>
            {/* Fixed nested structure here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                {data.map(coffee => (
                    <Cards key={coffee.id} coffee={coffee}></Cards>
                ))}
            </div>
        </div>
    );
};

export default Coffee;
