import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const { id } = useParams();
    const allCoffeeData = useLoaderData();
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        const singleData = allCoffeeData.find(coffee => coffee.id == id);
        setCoffee(singleData);
    }, [allCoffeeData, id]);

    const { name, image, ingredients, nutrition_info, description, making_process, rating, popularity } = coffee;

    return (
        <div className='my-12'>
            <h1 className='text-2xl md:text-4xl font-thin mb-8'>{description}</h1>

            <div className='w-full h-full md:h-[500px]  object-cover overflow-hidden shadow-xl '>
                <img className=' w-full h-full rounded-xl ' src={image} alt="" />
            </div>

            <div className='my-6 flex justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='text-2xl md:text-3xl font-thin'>{name}</h1>
                    <p className='text-base'>Popularity : {popularity}</p>
                    <p className='text-base'>Rating : {rating}</p>
                </div>
                <div>
                    <button className='btn btn-warning text-base font-bold '>Add To Favorites</button>
                </div>
            </div>
            <div className='my-6'>
                  <h1 className='text-2xl md:text-3xl font-thin'>Making Process :</h1>
                  <p className='text-base '>{making_process}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;
