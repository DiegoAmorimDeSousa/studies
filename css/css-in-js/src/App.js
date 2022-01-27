import { Button } from './styles';

function App() {
  return (
    <>
      <Button styles={{
        background: 'red',
      }}>
        Deletar
      </Button>
      <Button styles={{
        background: 'green'
      }}>
        Criar
      </Button>
    </>
  );
}

export default App;
