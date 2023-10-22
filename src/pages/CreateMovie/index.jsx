import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Content, Form, Bookmarks, Action } from "./style";

import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { InputTextarea } from "../../components/InputTextarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to={"/"}>
          <FiArrowLeft />
          <span>Voltar</span>
        </Link>
        <Form>
          <h1>Novo Filme</h1>
          <div>
            <InputText placeholder="Título" />
            <InputText placeholder="Sua Nota (de 0 a 5)" />
          </div>
          <InputTextarea placeholder="Observações" />
          <Bookmarks>
            <h1>Marcadores</h1>
            <div>
              <Marker value="Ação" />
              <Marker isNew />
            </div>
          </Bookmarks>
          <Action>
            <Button title={"Excluir filme"} variant />
            <Button title={"Salvar alterações"} />
          </Action>
        </Form>
      </Content>
    </Container>
  );
}
