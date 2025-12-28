export const CandidateProfile = () =>{
    const name = "Vamsi krishna";
    const role = "Web Developer";
    const yearsOfExperience = 5;
    const isAvailable = true;
    return(
        <>
        <h2>{name}</h2>
        <p> {role} with {yearsOfExperience} years of experience</p>

        <p>starts his career in {2025 - yearsOfExperience}</p>
        <p>contact: {name.toLowerCase().replace(" ", ".")}@gmail.com</p>
        <p>status: {isAvailable ? "Available here" : "Not available"}</p>
        </>
    );
};