import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
import { useState } from "react";

const Coffee = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    const handleSort = sortBy => {
        if(sortBy == 'popularity'){
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }else if(sortBy == 'rating'){
            const sorted = [...data].sort((a, b) => a.rating - b.rating)
            setCoffees(sorted)
        }

    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-thin">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
                </div>
                <div className="space-x-4">
                    <button onClick={()=> handleSort('popularity')} className="btn btn-warning" >Sort By Popularity</button>
                    <button onClick={()=> handleSort('rating')} className="btn btn-warning">Sort By Rating</button>
                </div>
            </div>
            {/* Fixed nested structure here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                {coffees.map(coffee => (
                    <Cards key={coffee.id} coffee={coffee}></Cards>
                ))}
            </div>
        </div>
    );
};

export default Coffee;
