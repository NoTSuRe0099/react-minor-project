import React from "react";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");
    const [img, setImg] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        let data = { name, city, age, img };
        fetch("/profiles", {
            RequestMode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                console.log("response", resp);
            });
        });
    };

    return (
        <div className="container flex flex-col items-center mt-3">
            <label
                htmlFor="name"
                className=" mr-auto text-sm font-semibold text-gray-700 mb-2 "
            >
                Name:
            </label>
            <input
                name="name"
                required
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                placeholder="🧑 Name:"
                type="text"
                className="focus:outline-none pl-4 focus:border-blue-300 border h-11 w-full focus:ring rounded-md mb-3"
            />
            <label
                htmlFor="name"
                className=" mr-auto text-sm font-semibold text-gray-700 mb-2 "
            >
                City:
            </label>
            <input
                name="city"
                value={city}
                required
                onChange={(e) => {
                    setCity(e.target.value);
                }}
                placeholder="🏙 city:"
                type="text"
                className="focus:outline-none pl-4  focus:border-blue-300 border h-11 w-full focus:ring rounded-md mb-3"
            />
            <label
                htmlFor="name"
                className=" mr-auto text-sm font-semibold text-gray-700 mb-2 "
            >
                Age:
            </label>
            <input
                name="age"
                value={age}
                required
                onChange={(e) => {
                    setAge(e.target.value);
                }}
                placeholder="🙍‍♂️ age:"
                type="text"
                className="focus:outline-none pl-4  focus:border-blue-300 border h-11 w-full focus:ring rounded-md mb-3"
            />
            <label
                htmlFor="name"
                className=" mr-auto text-sm font-semibold text-gray-700 mb-2 "
            >
                Image URL Here:
            </label>
            <input
                name="img"
                value={img}
                required
                onChange={(e) => {
                    setImg(e.target.value);
                }}
                placeholder="🔗 URL:"
                type="text"
                className="focus:outline-none pl-4  focus:border-blue-300 border h-11 w-full focus:ring rounded-md mb-3"
            />
            <div className="flex">
                <button
                    onClick={submitHandler}
                    type="button"
                    className="w-max py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Form;
