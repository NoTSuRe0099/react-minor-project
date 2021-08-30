import React, { Component } from "react";
import Card from "../Components/CardComponent/Card";
import Form from "../Components/FormComponent/Form";
import Navbar from "../Components/NavbarComponent/Navbar";

class Home extends Component {
    state = {
        profiles: [],
        img: " ",
        name: " ",
        city: " ",
        age: undefined,
        toggleForm: false,
        updateBtn: false,
        cardIndex: undefined,
    };

    componentDidMount() {
        this.setState({
            profiles: JSON.parse(localStorage.getItem("profiles")) || [],
        });
    }

    getFormData = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    deleteProfileHandler = (data) => {
        let copyProfile = this.state.profiles.filter((card) => card !== data);
        this.setState({ profiles: copyProfile });
        localStorage.setItem("profiles", JSON.stringify(copyProfile));
    };

    ToggleForm = () => {
        this.setState({
            toggleForm: !this.state.toggleForm,
            updateBtn: false,
            img: "",
            name: "",
            city: "",
            age: "",
        });
    };

    updateProfile = (index) => {
        let copyProfile = [...this.state.profiles];
        let { img, name, city, age } = { ...this.state };
        copyProfile[index] = { img, name, city, age };
        this.setState({ profiles: copyProfile });
        localStorage.setItem("profiles", JSON.stringify(copyProfile));
        this.setState({ toggleForm: !this.state.toggleForm });
    };

    updateCardBtn = (data, index) => {
        this.setState({ updateBtn: true });
        this.setState({
            cardIndex: index,
            img: data.img,
            name: data.name,
            city: data.city,
            age: data.age,
        });
        this.setState({ toggleForm: !this.state.toggleForm });
    };

    submitHandler = (e) => {
        let { img, name, city, age } = { ...this.state };
        if (img === "" || name === "" || city === "" || age === "")
            return alert("This Field Should not be Empty");
        e.preventDefault();
        let copyProfile = [...this.state.profiles];
        copyProfile.push({ img, name, city, age });
        this.setState({ profiles: copyProfile });
        localStorage.setItem("profiles", JSON.stringify(copyProfile));
        this.setState({ toggleForm: !this.state.toggleForm });
    };

    render() {
        let card = this.state.profiles.map((data, index) => {
            return (
                <Card
                    profiles={data}
                    key={index}
                    deleteCard={this.deleteProfileHandler.bind(this, data)}
                    index={index}
                    updateBtn={this.state.updateBtn}
                    updateCardBtn={this.updateCardBtn.bind(this, data, index)}
                />
            );
        });

        let form = (
            <Form
                getFormData={this.getFormData}
                submitHandler={this.submitHandler}
                ToggleForm={this.ToggleForm}
                updateProfile={() => this.updateProfile(this.state.cardIndex)}
                updateBtn={this.state.updateBtn}
                cardIndex={this.state.cardIndex}
                img={this.state.img}
                name={this.state.name}
                city={this.state.city}
                age={this.state.age}
            />
        );

        return (
            <>
                <Navbar
                    ToggleForm={this.ToggleForm}
                    showForm={this.state.toggleForm}
                />
                <div className="flex flex-wrap container justify-between mt-0 sm:mt-5">
                    {this.state.toggleForm ? form : card}

                    {/* <-------------Dummy-Card's-------------> */}
                    <div className="w-64 h-2 md:mr-2 flex-grow bg-transparent"></div>
                    <div className="w-64 h-2 md:mr-2 flex-grow bg-transparent"></div>
                    <div className="w-64 h-2 md:mr-2 flex-grow bg-transparent"></div>
                    <div className="w-64 h-2 md:mr-2 flex-grow bg-transparent"></div>
                </div>
            </>
        );
    }
}

export default Home;
