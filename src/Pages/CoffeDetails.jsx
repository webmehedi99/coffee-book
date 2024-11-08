import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutritionImage from '../assets/nutrition.png'

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
                <p className='text-base mt-2'>{making_process}</p>
            </div>
            <div className='flex justify-between items-center my-6'>
                <div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-thin'>Ingredients:</h1>
                        <ul className='list-disc ml-12 mt-6'>
                            {
                                ingredients && ingredients.map((ingredient, index) => <li className='text-xl ' key={index}  >{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-thin mt-12'>Nutrition:</h1>
                        <ul className='list-disc ml-12 mt-6'>
                            {nutrition_info && (
                                <>
                                    <li className='text-xl'>Calories: {nutrition_info.calories}</li>
                                    <li className='text-xl'>Fat: {nutrition_info.fat}</li>
                                    <li className='text-xl'>Carbohydrates: {nutrition_info.carbohydrates}</li>
                                    <li className='text-xl'>Protein: {nutrition_info.protein}</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                   <img className='w-full h-100 md:h-[500px]' src={nutritionImage} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CoffeeDetails;
