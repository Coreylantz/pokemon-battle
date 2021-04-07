import React from 'react'

import BlastoiseBack from './Blastoise_Back.png'
import CharizardFront from './Charizard_Front.png'


import {GameBoyBackground, ScreenContainer, Screen, OpponentPokemon, UserPokemon, DialogContainer} from './styled'

export const GameBoy = () => {
  return (
  <GameBoyBackground>
    <ScreenContainer>
      <Screen>
        <OpponentPokemon src={CharizardFront} />
        <UserPokemon src={BlastoiseBack} />
        <DialogContainer>Enemy CHARIZARD's <br />hurt by tackle!</DialogContainer>
      </Screen>
    </ScreenContainer>
  </GameBoyBackground>
  )
}