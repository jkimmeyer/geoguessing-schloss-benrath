
import { ranking } from ".prisma/client";
import { t } from "i18next";
import React from "react";
import { ButtonType } from "../../types";
import SbButton from "../SbButton/SbButton";
import SbInput from "../SbInput/SbInput";

type State = ranking;

export class SbNameForm extends React.Component<State> {
  state = { playerName: '', score: 250 };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ playerName: event.currentTarget.value });
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = async () => {
    const playerName = this.state.playerName;
    const score = this.state.score;

    try {
      const body = { playerName, score };
      await fetch(`/api/rankings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SbInput
          label={t('register.playerName')}
          placeholder={t('register.playerName')}
          type="text"
          value={this.state.playerName}
          onChange={this.handleChange}
        />

        <SbButton
          buttonType={ButtonType.Primary}
          type="submit"
        >
          {t('addPlayerToScoreboard')}
        </SbButton>
      </form>
    );
  }
}
