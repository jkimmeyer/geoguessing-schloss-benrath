
import { t } from "i18next";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { IconNames, UserContextType } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import SbInput from "../SbInput/SbInput";
import sbNameFormStyles from './SbNameForm.module.css'

export const SbNameForm = () => {
  const [playerName, setPlayername] = useState('');
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const { setCurrentUser } = useContext(UserContext) as UserContextType

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPlayername(event.currentTarget.value);
  };

  useEffect(() => {
    const handleSubmit = async (name: string) => {
      if (!name || name === '') {
        setCurrentUser({ playerName: "" })
        setResult("Bitte geben Sie Ihren Namen ein.")
        return
      }

      const postData = async () => {
        try {
          const response = await fetch(`/api/rankings/show?playerName=${name}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
          return response.json()
        } catch (error: unknown) {
          setResult(error?.toString() || '')
        }
      }

      setLoading(true)

      postData().then((result) => {
        setLoading(false)

        if (result === null) {
          setResult("Name verfügbar")
          setCurrentUser({ playerName: name })
        } else {
          setCurrentUser({ playerName: "" })
          setResult("Der Name ist leider schon vergeben.")
        }
      });
    };

    const timeOutId = setTimeout(() => handleSubmit(playerName), 500);
    return () => clearTimeout(timeOutId);
  }, [playerName, setCurrentUser]);

  return (
    <form>
      <div className={sbNameFormStyles['name-form--input']}>
        <SbInput
          label={t('register.playerName')}
          placeholder={t('register.playerName')}
          type="text"
          withLoader={true}
          required={true}
          value={playerName}
          onChange={handleChange}
        />

        {loading &&
          <div className={sbNameFormStyles['name-form--icon']}>
            <span className={sbNameFormStyles['name-form--loader']} />
          </div>
        }

        {!loading &&
          <div className={sbNameFormStyles['name-form--icon'] + ' ' + sbNameFormStyles['name-form--person-icon']}>
            <SbIcon icon={ IconNames.Person}></SbIcon>
          </div>
        }
      </div>

      {(result != '' || result !== undefined) &&
        <p className={sbNameFormStyles['name-form--error']}>{result}</p>
      }
    </form>
  );
}
