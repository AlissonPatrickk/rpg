import *as C from "./App.styles";
import { Character } from "./components/index";


const App = () => {
  return(
    <C.Container>
      <C.Map>
        <Character x={6} y={0}/>
      </C.Map>
    </C.Container>
  );
}

export default App;