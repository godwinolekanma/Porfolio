import React from "react";
import {motion, AnimatePresence} from "framer-motion"


function PageTransition(){
    return (
        <AnimatePresence>
            <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className="page-trans" />
        </AnimatePresence>
    )
}

export default PageTransition;