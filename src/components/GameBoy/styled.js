import styled from 'styled-components'

export const GameBoyBackground = styled.main`
  background: 	#aaaaaa;
  width: 300px;
  height: 575px;
  margin: 0 auto;
  border-radius: 5px 5px 40px 5px;
  padding: 30px;
`

export const ScreenContainer = styled.div`
border-radius: 5px 5px 40px 5px;
background: #5c5f70;
width: 100%;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
`

export const Screen = styled.div`
  height: 200px;
  width: 200px;
  background: #fff;
  position: relative;
  border-radius: 5px;
`

export const UserPokemon = styled.img`
  position: absolute;
  bottom: 32px;
  left: 10px;
`

export const OpponentPokemon = styled.img`
position: absolute;
  right: 10px;
  top: 10px;
`

export const DialogContainer = styled.div`
  border: 3px solid;
  height: 40px;
  width: calc(100% - 4px);
  overflow: hidden;
  padding: 5px;
  position: absolute;
  bottom: 2px;
  left: 2px;
  padding: 5px 3px 3px;

`
