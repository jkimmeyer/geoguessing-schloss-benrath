import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { subscribe, unsubscribe } from "../../lib/events";

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    subscribe('game:started', start)
    subscribe('game:paused', pause)
    subscribe('game:reset', reset)

    return () => {
      unsubscribe('game:started', start)
      subscribe('game:paused', pause)
      unsubscribe('game:reset', reset)
      reset
    }
  });

  return (
    <div>
      <span>{hours >= 10 ? hours.toString()[0] : '0'}{hours >= 10 ? hours.toString()[1] : hours.toString()}</span>:
      <span>{minutes >= 10 ? minutes.toString()[0] : '0'}{minutes >= 10 ? minutes.toString()[1] : minutes.toString()}</span>:
      <span>{seconds >= 10 ? seconds.toString()[0] : '0'}{seconds >= 10 ? seconds.toString()[1] : seconds.toString()}</span>
    </div>
  )
}
