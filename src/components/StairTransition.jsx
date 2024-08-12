import React from "react";
import Stairs from "./Stairs";
import {motion, AnimatePresence} from "framer-motion"

function StairAnimation (){
    return (
        <>
        <AnimatePresence mode="wait">
            <div className="stair-trans">
                <Stairs />
            </div>
        </AnimatePresence>
        </>
    )
}

export default StairAnimation;