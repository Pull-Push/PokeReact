import React, { useEffect, useState } from 'react'
import axios from 'axios';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const PokeForm= () => {
    
    const [ pokeName, setPokeName ] = useState("")
    const [pokeImg, setPokeImg] = useState("")
    useEffect(()=>{
        let pokenumber = getRandomInt(1010)
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokenumber)
            .then(function(response){
                setPokeImg(response.data.sprites.front_default);
                setPokeName(response.data.name);
            })
            .catch(err=>console.log(err))
    }, []);

    return (
        <div>
            <div>
                <form>
                    <p>Choose a Generation</p>
                    <label htmlFor="all" value="all">ALL</label>
                    <input type='radio' value="all" />
                    <label htmlFor="gen1" value="gen1">Gen1</label>
                    <input type='radio'value="gen1"/>
                    <label htmlFor="gen2" value="gen2">Gen2</label>
                    <input type='radio'value="gen2"/>
                    <label htmlFor="gen3" value="gen3">Gen3</label>
                    <input type='radio'value="gen3"/>
                    <input type="submit"/>
                </form>
            </div>
            <h2>The Current Pokemon is: {pokeName}</h2>
            <img src={pokeImg} alt="" />
        </div>
    )
}
export default PokeForm;