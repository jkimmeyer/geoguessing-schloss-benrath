
import { t } from "i18next";
import React from "react";
import SbInput from "../SbInput/SbInput";
import sbNameFormStyles from './SbNameForm.module.css'

type State = {
  playerName: string,
  score: number,
  result: string | undefined,
};

export class SbNameForm extends React.Component {
  state: State = { playerName: '', score: 250, result: undefined };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ playerName: event.currentTarget.value });
  };

  handleSubmit: React.FocusEventHandler<HTMLFormElement> = async () => {
    const playerName = this.state.playerName;

    if (!playerName || playerName === '') {
      this.setState({result: "Bitte geben Sie Ihren Namen ein."})
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
        this.setState({ result: error?.toString() })
      }
    }

    postData().then((result) => {
      if (result === null) {
        this.setState({ result: "Name verfügbar" })
      } else {
        this.setState({ result: "Der Name ist leider schon vergeben." })
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SbInput
          label={t('register.playerName')}
          placeholder={t('register.playerName')}
          type="text"
          required={true}
          value={this.state.playerName}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
        />
        {(this.state.result != '' || this.state.result !== undefined) &&
          <p className={sbNameFormStyles['name-form--error']}>{this.state.result}</p>
        }
      </form>
    );
  }
}
