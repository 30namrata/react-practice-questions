import { useMemo, useState } from "react";

const Calculation = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(5);

    const expensiveCalculation = (num) => {
        console.log("Clculating ......");
        let result = 0
        for (let i = 0; i < 1000; i++) {
            result = result + num * 2
        }
        return result;
    }

    const result = useMemo(() => {
        return expensiveCalculation(num);
    }, [num]);
    return (
        <>
            <h2 style={{ color: 'white', margin: '20px' }}>Result:{result}</h2>
            <button onClick={() => setCount(count + 1)} style={{ color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', margin: '5px' }}>Count:{count}</button>
            <button onClick={() => setNum(num + 1)} style={{ color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', padding: '5px 10px', margin: '5px' }}>Number: {num}</button>
        </>
    )
}
export default Calculation;