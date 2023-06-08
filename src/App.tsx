import Container from "./components/Container";
import Header from "./views/Header";
import Main from "./views/Main";

function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
