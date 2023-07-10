
import React from "react";
import freeFall from "../data/freeFall.json";
import mru from "../data/mru.json";
import mrua from "../data/mru.json";
import vector from "../data/vector.json";
import { PracticeComponent } from "./PracticeComponent";

export const VectorPractice = () => {
    return (
        <PracticeComponent data={vector} subject="vector" title="Practica vectores"/>
    );
};
export const MruPractice = () => {
    return (
        <PracticeComponent data={mru} subject="mru" title="Practica M.R.U."/>
    );
};
export const MruaPractice = () => {
    return (
        <PracticeComponent data={mrua} subject="mrua" title="Practica M.R.U.A."/>
    );
};
export const FreeFallPractice = () => {
    return (
        <PracticeComponent data={freeFall} subject="freeFall" title="Practica caída libre"/>
    );
};
export * from "./PhysicPractice"
