import { useState } from "react";

const Counter = () => {
    const [add, setAdd] = useState(0);

    const onAdd = () => {
        const addition = add + 1;
        setAdd(addition);
    };
    const onSub = () => {
        const addition = add - 1;
        setAdd(addition);
    };
    const onReset = () => {
        setAdd(0);
    };

    return (
        <>
            <h2 style={{ color: 'white' }}>Counter</h2>
            <div>
                <input type="number" value={add} onChange={(e) => setAdd(e.target.value)} />
            </div>

            <div>
                <button style={{ color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', margin: '5px' }} onClick={onAdd}>Add</button>
                <button style={{ color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', margin: '5px' }} onClick={onSub}>Sub</button>
                <button style={{ color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', margin: '5px' }} onClick={onReset}> Reset</button>
            </div>
            <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: '20px' }}>{add}</div>
        </>
    );
};
export default Counter;
