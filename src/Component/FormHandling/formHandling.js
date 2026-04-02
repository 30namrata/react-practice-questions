import { useState } from "react";

const FormHandling = () => {
    const [name, setName] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        alert(`Enter the value ${name}`);
        setName("");
    };

    return (
        <>
            <div style={{ color: 'white' }}>Form handling</div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px' }} onSubmit={handleForm}>
                <input style={{ padding: '10px', borderRadius: '5px', border: '1px solid white' }} value={name} onChange={(e) => setName(e.target.value)} />
                <button style={{ padding: '10px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white' }}>Submit</button>
            </form>
        </>
    );
};
export default FormHandling;
