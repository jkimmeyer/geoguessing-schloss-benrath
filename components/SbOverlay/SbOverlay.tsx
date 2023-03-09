import overlayStyles from './SbOverlay.module.css'
import { OverlayVariant } from '../../types';
import { subscribe, unsubscribe } from '../../lib/events';
import { useEffect, useState } from 'react';
interface Props {
  withContent: boolean,
  children?: React.ReactNode;
}

const SbOverlay: React.FC<Props> = ({
  withContent,
  children
}) => {
  const [flashVisible, setFlashVisible] = useState(false);
  const [flashMessage, setFlashMessage] = useState('')
  const [flashMessageType, setFlashMessageType] = useState('')

  const toggleFlashVisible = () => {
    setFlashVisible(current => !current)
    setTimeout(() => {
      setFlashVisible(current => !current)
    }, 5000)
  }

  const handleFlash = (event: CustomEvent) => {
    setFlashMessageType(event.detail.type)
    setFlashMessage(event.detail.message)
    toggleFlashVisible()
  }

  useEffect(() => {
    subscribe("game:flash", handleFlash)

    return () => {
      unsubscribe("game:flash", handleFlash)
    }
  })

  return (
    <div className={overlayStyles['overlay']} data-variant={withContent ? OverlayVariant.WithContent : ''}>
      {flashVisible &&
        <div className={overlayStyles['flash-container']}>
          <div className={overlayStyles['flash']} data-status={flashMessageType}>
            {flashMessage}
          </div>
        </div>
      }
      {children}
    </div>
  );
}

export default SbOverlay;
