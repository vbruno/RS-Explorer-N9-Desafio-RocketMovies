import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { BoxMovieDetail } from "../../components/BoxMovieDetail";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <Button title={'Adicionar filme'} icon={FiPlus} />
        </div>
        <section>
          <BoxMovieDetail />
          <BoxMovieDetail />
        </section>
      </Content>
    </Container>

  )
}
