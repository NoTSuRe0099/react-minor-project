import React from "react";

const Form = (props) => {
    return (
        <form
            onSubmit={props.submitHandler}
            className="container flex flex-col items-center mt-3"
        >
            <label
                htmlFor="name"
                className=" mr-auto text-sm font-semibold text-gray-700 mb-2 "
            >
                Name:
            </label>
            <input
                name="name"
                required
                value={props.name}
                onChange={props.getFormData}
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
                value={props.city}
                required
                onChange={props.getFormData}
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
                value={props.age}
                required
                onChange={props.getFormData}
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
                value={props.img}
                required
                onChange={props.getFormData}
                placeholder="🔗 URL:"
                type="text"
                className="focus:outline-none pl-4  focus:border-blue-300 border h-11 w-full focus:ring rounded-md mb-3"
            />
            <div className="flex">
                {props.updateBtn ? (
                    <button
                        onClick={() => props.updateProfile()}
                        type="button"
                        className="w-max py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="w-max py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                    >
                        Submit
                    </button>
                )}
                <button
                    onClick={props.ToggleForm}
                    type="submit"
                    className="w-max py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Go Back
                </button>
            </div>
        </form>
    );
};

export default Form;
