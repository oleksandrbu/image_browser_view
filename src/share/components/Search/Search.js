import React, { useState, useEffect } from 'react'

import "./Search.css"
import { useHistory } from 'react-router-dom';

function useTextField(init, name){
    const [value, setValue] = useState(init);

    return {
        value: value,
        name: name,
        onChange: (e) => setValue(e.target.value),
        onClear: () => setValue('')
    }
}

function Search(props){
    const history = useHistory()
    const biggerHeigth = useTextField('', 'search-bigger-height')
    const equalHeigth = useTextField('', 'search-equal-height')
    const lesserHeigth = useTextField('', 'search-lesser-height')
    const biggerWidth = useTextField('', 'search-bigger-width')
    const equalWidth = useTextField('', 'search-equal-width')
    const lesserWidth = useTextField('', 'search-lesser-width')
    const type = useTextField('', 'search-type')
    const title = useTextField('', 'search-title')
    const character = useTextField('', 'search-character')

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        const path = (
            "/search?"
            + ((biggerHeigth.value !== '') ? "minHeight=" + biggerHeigth.value + "&": '')
            + ((equalHeigth.value !== '') ? "height=" + equalHeigth.value + "&": '')
            + ((lesserHeigth.value !== '') ? "maxHeight=" + lesserHeigth.value + "&": '')
            + ((biggerWidth.value !== '') ? "minWidth=" + biggerWidth.value + "&": '')
            + ((equalWidth.value !== '') ? "width=" + equalWidth.value + "&": '')
            + ((lesserWidth.value !== '') ? "maxWidth=" + lesserWidth.value + "&": '')
            + ((type.value !== '') ? "filetype=" + type.value + "&": '')
            + ((title.value !== '') ? "titleId=" + title.value + "&": '')
            + ((character.value !== '') ? "characterId=" + character.value + "&": '')
        )
        history.push(path)
            
        biggerHeigth.onClear() 
        equalHeigth.onClear() 
        lesserHeigth.onClear() 
        biggerWidth.onClear() 
        equalWidth.onClear() 
        lesserWidth.onClear() 
        type.onClear() 
        title.onClear() 
        character.onClear() 
    }

    return (
        <div className={"search" + (props.isVisible ? " invisible" : "")}>
            <form onSubmit={onSubmitHandler}>
                <h2>Height:</h2>
                <div>
                    <span>&#60;</span>
                    <input type="text" {...biggerHeigth}/>
                </div>
                <div><span>=</span><input type="text" {...equalHeigth}/></div>
                <div><span>&#62;</span><input type="text" {...lesserHeigth}/></div>
                <h2>Width:</h2>
                <div><span>&#60;</span><input type="text" {...biggerWidth}/></div>
                <div><span>=</span><input type="text" {...equalWidth}/></div>
                <div><span>&#62;</span><input type="text" {...lesserWidth}/></div>
                <h2>TypeId:</h2>
                <div><span>=</span><input type="text" {...type}/></div>
                <h2>TitleId:</h2>
                <div><span>=</span><input type="text" {...title}/></div>
                <h2>CharacterId:</h2>
                <div><span>=</span><input type="text" {...character}/></div>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search