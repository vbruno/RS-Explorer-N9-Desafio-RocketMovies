import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar por título' />

      <Profile>
        <div>
          <strong>
            Bruno S. Velho
          </strong>
          <a href="/">
            sair
          </a>
        </div>

        <img src="http://github.com/vbruno.png" alt="Foto do usuário" />

      </Profile>

    </Container>
  )
}
