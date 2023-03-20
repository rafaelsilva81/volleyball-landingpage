import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
const DefaultAnimationContainer = (props: PropsWithChildren) => {
  return (
    <motion.div
      transition={{
        duration: 0.2,
      }}
      initial="hidden"
      whileInView="visible"
      // impedir que a animação execute mais de uma vez
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 20 },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default DefaultAnimationContainer;
