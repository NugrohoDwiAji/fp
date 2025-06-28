// components/AnimatedNumber.tsx
import CountUp from "react-countup";

type AnimatedNumberProps = {
  end: number;
  duration?: number ;
};

const AnimatedNumber = ({ end, duration = 2 }: AnimatedNumberProps) => {
  return <CountUp start={0} end={end} duration={duration} separator="," />;
};

export default AnimatedNumber;
