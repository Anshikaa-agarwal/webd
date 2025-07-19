import React from "react";

const Header = () => {

    const skills = ['React', 'JavaScript', 'CSS'];

    return (
        <>
        <h2>List</h2>
        <p>Here is a list of hobbies</p>
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
        </>
    )
}

export default Header;