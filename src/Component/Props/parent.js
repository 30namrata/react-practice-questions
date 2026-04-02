import Child from "./child";

const Parent = ({ name, age, gender }) => {
    return (
        <>
            <div style={{ color: 'white' }}>Parent</div>
            <Child name={name} age={age} gender={gender} />
        </>
    )
}
export default Parent;