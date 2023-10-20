import { Container } from "./styles";

import { StarRate } from "../StarRate";
import { Tag } from "../Tag";

export function BoxMovieDetail() {
  return (
    <Container>
      <h1>Interestellar</h1>
      <StarRate value={3} />
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>

    </Container>
  )
}
