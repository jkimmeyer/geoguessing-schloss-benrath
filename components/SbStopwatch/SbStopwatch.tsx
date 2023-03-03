import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { publish, subscribe, unsubscribe } from "../../lib/events";

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [timeForLast, setTimeForLast] = useState({seconds, minutes, hours})

  const addScore = () => {
    publish('game:addScoreCallback', {timeForLast, currentTime: {seconds, minutes, hours}})
    setTimeForLast({seconds, minutes, hours})
  }

  useEffect(() => {
    subscribe('game:started', start)
    subscribe('game:paused', pause)
    subscribe('game:resume', start)
    subscribe('game:reset', reset)
    subscribe('game:addScore', addScore)

    return () => {
      unsubscribe('game:started', start)
      unsubscribe('game:paused', pause)
      unsubscribe('game:resume', start)
      unsubscribe('game:reset', reset)
      unsubscribe('game:addScore', addScore)
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
