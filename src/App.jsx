import React, { useReducer } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case 'plus':
            return { ...state, count: state.count + 1 }
            break
        case "minus":
            return { ...state, count: state.count - 1 }
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0
    })
    var Plus = () => {
        dispatch({
            type: 'plus',
        })
    }
    var Minus = () => {
        dispatch({
            type: 'minus'
        })
    }
    return (
        <div className='container my-5  '>
            <h1 className='mx-3'>{state.count}</h1>
            <div className="d-flex">
                <button className='btn btn-outline-dark btn-sm' onClick={Plus}>+</button>
                <button className='btn btn-outline-dark btn-sm mx-2' onClick={Minus}>-</button>
            </div>
        </div>
    )
}

export default App