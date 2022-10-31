import React from 'react'
import { atom } from "recoil";

const currentIndexState = atom({
    key  : 'currentIndexState',
    default : 0
})
const idRespondenState = atom({
    key  : 'idRespondenState',
    default : 0
})

export {currentIndexState,idRespondenState}