export const NameList = () =>{
    const names = ["Vamsi", "Lokesh", "ramesh"];

    const nameList = names.map((n, index) => <h2 key ={index}>{index+1} {names}</h2>)

    return <>{nameList}</>
}