import { Lupa } from "@/svg/Lupa"
import { useState } from "react"

type InputSearchType = "input1" | "input2"

interface InputSearchProps {
    type?: InputSearchType

}

export const InputSearch = ({ type = "input1" }: InputSearchProps) => {
    const [mostrar, setMostrar] = useState<"si" | "no">("no")
    const funcionclick = () => {
        if( mostrar == "si"){
            //codigo
            setMostrar("no")
        }
        if( mostrar == "no"){
            //codigo
            setMostrar("si")
        }
    }
    return (<>
        <label className={`
            inputsearch
            ${type} 
            ${mostrar == "si" ? "mostrarInput" : ""}
        `}>
            <input
                type="text"
                placeholder="Buscar"
            />
            <span className="icon" onClick={funcionclick}>
                <Lupa />
            </span>
        </label>
        {/* input debe estar a la mano con label, sirve para que los elementos que esten dentro de html al clickcquearlo seleccione ese input */}
    </>)
}