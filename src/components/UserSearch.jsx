import React, {useState} from 'react'


export default function UserSearch({ handleChange, handleReset }) {
    const [searchValue, setSearchValue] = useState("")
    const handleValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    const resetValue = () => {
        setSearchValue('')
        handleReset()
    }
    const keyPress = (event) =>{
        if(event.keyCode === 13){ handleChange(event) }}

    return (
        <div className="search-box">
            <input type='text' placeholder="search" value={searchValue} onChange={handleValueChange} onKeyDown={keyPress}></input>
            <button onClick={resetValue}>Reset</button>
        </div>
    )
}
