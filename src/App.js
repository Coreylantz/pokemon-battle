import {GameBoy} from './components/GameBoy'
import {GlobalStyles} from './styles/GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <GameBoy />
    </div>
  );
}
