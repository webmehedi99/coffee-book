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

    return (
        <div>
            Coffee details: { coffee.description}
        </div>
    );
};

export default CoffeeDetails;
