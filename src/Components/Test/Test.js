import React from 'react'
import { storage } from '../../Firebase/Firebase'

const Test = () => {
    console.log(storage)
    return (
        <div>
            <form>
            <h1>RECENT NEWS IMAGE FORM</h1>
            Enter Image<input type="file"/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Test
