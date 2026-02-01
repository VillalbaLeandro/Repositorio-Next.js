import React from 'react';
import { motion } from 'framer-motion';

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

export const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 50, damping: 20 }
    }
};

const MotionSection = ({ children, className, id, ...props }) => {
    return (
        <motion.section
            id={id}
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Updates when 10% of element is in view
            {...props}
        >
            {children}
        </motion.section>
    );
};

export default MotionSection;
