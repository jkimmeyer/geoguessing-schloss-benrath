import { format } from "date-fns";
import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { subscribe, unsubscribe } from "../../lib/events";

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
    start,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    subscribe('game:mapOpened', start)

    return () => {
      unsubscribe('game:mapOpened', start)
    }
  });

  return (
    <div>
      <span>{format(hours, 'kk')}</span>:<span>{format(minutes, 'mm')}</span>:<span>{format(seconds, 'ss')}</span>
    </div>
  )
}
