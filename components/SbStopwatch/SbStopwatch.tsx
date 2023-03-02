import { format } from "date-fns";
import { useStopwatch } from "react-timer-hook";

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });

  return (
    <div>
      <span>{format(hours, 'kk')}</span>:<span>{format(minutes, 'mm')}</span>:<span>{format(seconds, 'ss')}</span>
    </div>
  )
}
