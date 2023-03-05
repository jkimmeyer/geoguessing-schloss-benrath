
import { t } from "i18next";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { UserContextType } from "../../types";
import SbInput from "../SbInput/SbInput";
import sbNameFormStyles from './SbNameForm.module.css'

export const SbNameForm = () => {
  const [playerName, setPlayername] = useState('');
  const [result, setResult] = useState('')

  const { setCurrentUser } = useContext(UserContext) as UserContextType

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPlayername(event.currentTarget.value);
  };

  const handleSubmit: React.FocusEventHandler<HTMLFormElement> = async () => {
    if (!playerName || playerName === '') {
      setResult("Bitte geben Sie Ihren Namen ein.")
      return
    }

    const postData = async () => {
      try {
        const response = await fetch(`/api/rankings/show?playerName=${playerName}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        return response.json()
      } catch (error: unknown) {
        setResult(error?.toString() || '')
      }
    }

    postData().then((result) => {
      if (result === null) {
        setResult("Name verfügbar")
        setCurrentUser({playerName})
      } else {
        setCurrentUser({playerName: ""})
        setResult("Der Name ist leider schon vergeben.")
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SbInput
        label={t('register.playerName')}
        placeholder={t('register.playerName')}
        type="text"
        required={true}
        value={playerName}
        onChange={handleChange}
        onBlur={handleSubmit}
      />
      {(result != '' || result !== undefined) &&
        <p className={sbNameFormStyles['name-form--error']}>{result}</p>
      }
    </form>
  );
}
