import { useState } from 'react';
import SbInstructionCard from '../SbInstructionCard/SbInstructionCard';
import SbTourFrame from '../SbTourFrame/SbTourFrame';
import onboardingStyles from './SbOnboarding.module.css'

interface Props {
  toggleOnboarding: () => void;
}

const STEPS = [
  {
    title: "Zeit",
    id: 1,
    description: "Behalte deine Zeit im Blick. Sie wird am Ende des Spiels einen Einfluss auf deine Gesamtpunktezahl haben. Wenn du eine Pause brauchst, kannst du das Spiel selbstverständlich pausieren. Öffne dazu einfach das Karten- oder Einstellungsmenü.",
    direction: "bottom",
  },
  {
    title: "Einstellungsmenü",
    id: 2,
    description: "Swipe das Drag Icon einfach nach rechts oder tippe einmalig drauf.\n Das Spiel ist jetzt pausiert. Außerdem kannst du hier Einstellungen vornehmen oder das Spiel beenden, wenn du es dir anders überlegt hast.",
    direction: "bottom",
  },
  {
    title: "Gefundene Objekte",
    id: 3,
    description: "Hier siehst du, wie viele Objekte du schon gefunden hast und wie viele Objekte insgesamt zu suchen sind. Wenn du eine Pause brauchst, kannst du das Spiel selbstverständlich pausieren. Öffne dazu einfach das Karten- oder Einstellungsmenü.",
    direction: "bottom",
  },
  {
    title: "Deine nächste Aufgabe",
    id: 4,
    description: "Hier siehst du, welches Objekt als nächstes zu suchen ist. Wenn du eine größere Vorschau willst, klicke auf das kleine Vorschaubild.",
    direction: "bottom",
  },
  {
    title: "Punktzahl",
    id: 5,
    description: "Hier kannst du deine Punktzahl sehen. Sie ergibt sich aus der Zeit und der Anzahl an gefunden Objekten. Sei schnell bei deiner Suche. Am Ende werden die Anzahl der gefundenen Objekte und die benötigte Zeit in die Wertung einbezogen.",
    direction: "bottom",
  },
  {
    title: "Kartenmenü",
    id: 6,
    description: "Hast du dich einmal im Schloss verlaufen und möchtest vielleicht zum Start zurück? \n Swipe das Map Icons einfach nach links oder tippe drauf, um das Kartenmnü zu öffnen. Hier bekommst du eine Übersicht des Schlosses und kannst zum Startpunkt zurückkehren. Das Spiel ist solange pausiert.",
    direction: "bottom",
  },
]

const SbOnboarding: React.FC<Props> = ({
  toggleOnboarding
}) => {

  const [currentStep, setCurrentStep] = useState(STEPS[0]);

  const nextStep = () => setCurrentStep(current => {
    if (current.id >= STEPS.length) current = STEPS[STEPS.length];
    const nextStep = current.id;
    return STEPS[nextStep]
  })

  const previousStep = () => setCurrentStep(current => {
    if (current.id <= 1) current = STEPS[0];
    const previousStep = current.id - 2
    return STEPS[previousStep]
  })

  return (
    <SbTourFrame>
      <SbInstructionCard
        step={currentStep}
        totalSteps={STEPS.length}
        nextStep={nextStep}
        previousStep={previousStep}
        toggleOnboarding={toggleOnboarding} />
    </SbTourFrame>
  );
}

export default SbOnboarding;
