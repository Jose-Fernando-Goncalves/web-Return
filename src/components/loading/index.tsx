import { CircleDashed, Graph } from 'phosphor-react'
import { useState } from 'react'

export function Loading(){
    return(
        <div className="">
            <CircleDashed weight="bold" className="w-4 h-4 animate-spin"/>
        </div>
    )
}