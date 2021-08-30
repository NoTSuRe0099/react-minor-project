import React from "react";

const Card = (props) => {
    const { img, name, city, age } = props.profiles;
    return (
        <div to="/SingleProfile" className="card h-80">
            <div className="h-3/5 w-full">
                <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={name}
                />
            </div>

            <div className="py-2 px-2 h-2/5 w-full flex flex-col justify-evenly">
                <h2 className="font-bold"> {name} </h2>
                <h3 className="font-semibol text-gray-600"> {city} </h3>
                <h3 className="text-gray-600"> {age} </h3>

                <div className="flex ml-auto">
                    <button
                        onClick={() => props.deleteCard()}
                        className="text-sm w-max mr-2 bg-red-400 py-1 px-3 text-white hover:bg-red-500 rounded-sm"
                    >
                        Delete
                    </button>

                    <button
                        onClick={() => props.updateCardBtn()}
                        className="text-sm w-max bg-blue-500 py-1 px-3 text-white hover:bg-blue-600 rounded-sm editBtn"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
