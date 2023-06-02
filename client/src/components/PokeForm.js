import React, { useEffect, useState } from 'react'
import axios from 'axios';



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




const PokeForm = () => {
    const [pokeName, setPokeName] = useState("")
    const [pokeImg, setPokeImg] = useState("")
    let gameVer = [0]
    
    
    function unselect(e){
        if(e !== "0"){
            document.getElementById("all").checked = false;
            gameVersion(e)
        }else{
            const gentype = document.querySelectorAll('[id^="gen"]')
            gentype.forEach(element => {
                element.checked = false;
            });
            gameVersion(e)
        }
        }
    

    useEffect(() => {
        let pokenumber = getRandomInt(1010)
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokenumber)
            .then(function (response) {
                setPokeImg(response.data.sprites.front_default);
                setPokeName(response.data.name);
                console.log("initial",gameVer)
            })
            .catch(err => console.log(err))
    }, []);

    function gameVersion(num){
        let x = Number(num)
        console.log("game version is",gameVer)
        console.log("box selected",x)
        if(num==="0"){
            gameVer = [0]
        } else{
            if(gameVer[0]===0){
                if(!gameVer.includes(x)){
                    gameVer.pop(0)
                    gameVer.push(x)
                    }else{
                if(gameVer.includes(x)){
                    gameVer.pop(0)
                    let idx = gameVer.indexOf(x)
                    gameVer.pop(idx)
                    }
                }
            }
            else{
                if(!gameVer.includes(x)){
                    gameVer.push(x)
                }else{
                    let idx = gameVer.indexOf(x)
                    gameVer.pop(idx)
                }
            }
        } 
        console.log("the current game is",gameVer)
    }
    function newGame(e){
        e.preventDefault()
        //console.log(gameVer)
    }

    return (
        <div>
            <div>
                <form onChange={e => unselect(e.target.value)} onSubmit={newGame}>
                    <p>Choose a Generation</p>
                                        
                    <label htmlFor="all" value="all">All</label>
                    <input type='checkbox' id="all" value="0" name='all' defaultChecked />

                    <label htmlFor="gen1" value="gen1">Gen1</label>
                    <input type='checkbox' id="gen1" value="1" name='gen'/>

                    <label htmlFor="gen2" value="gen2">Gen2</label>
                    <input type='checkbox'id="gen2" value="2" name='gen' />

                    <label htmlFor="gen3" value="gen3">Gen3</label>
                    <input type='checkbox' id='gen3' value="3" name='gen'/>

                    <label htmlFor="gen4" value="gen4">Gen4</label>
                    <input type='checkbox' id='gen4' value="4" name='gen' />

                    <label htmlFor="gen5" value="gen5">Gen5</label>
                    <input type='checkbox' id='gen5' value="5" name='gen' />

                    <label htmlFor="gen6" value="gen6">Gen6</label>
                    <input type='checkbox' id='gen6' value="6" name='gen' />

                    <label htmlFor="gen7" value="gen7">Gen7</label>
                    <input type='checkbox' id='gen7' value="7" name='gen' />

                    <label htmlFor="gen8" value="gen8">Gen8</label>
                    <input type='checkbox' id='gen8' value="8" name='gen' />

                    <label htmlFor="gen9" value="gen9">Gen9</label>
                    <input type='checkbox' id='gen9' value="9" name='gen' />

                    <input type="submit" />
                </form>
            </div>
            <h2>The Current Pokemon is: {pokeName}</h2>
            <img src={pokeImg} alt={pokeName} />
        </div>
    )
}
export default PokeForm;