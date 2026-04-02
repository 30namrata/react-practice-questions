import React from 'react'
import Parent from './parent'
const GrandParent = () => {
    // const user = { name: "Namrata", age: 20 }
    return (
        <>
            <div style={{ color: 'white' }}>GrandParent</div>
            <Parent name="Namrata" age={20} gender="female" />
        </>
    )
}

export default GrandParent