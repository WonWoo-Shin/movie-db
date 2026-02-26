import { animate, motion, Variants } from "framer-motion";
import styled from "styled-components";

const TestStyle = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: tomato;
`;

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Test = () => {
  return (
    <TestStyle
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    ></TestStyle>
  );
};
