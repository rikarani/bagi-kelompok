import Container from "./partials/Container";
import Header from "./components/Header";
import Main from "./components/Main";

function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
