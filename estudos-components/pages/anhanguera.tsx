import type { NextPage } from 'next'
import Faculdade from '../components/Faculdade'
import { BoxMenu, Container, Menu } from '../styles/anhanguera'

const Home: NextPage = () => {
  return (
<Container>
<Faculdade>Seja bem vindo a Anhanguera</Faculdade>

<BoxMenu>
<Menu>
    <a href='#'>Cursos</a>
</Menu>
<Menu>
    <a href='#'>Unidades</a>
</Menu>
<Menu>
    <a href='#'>EAD</a>
</Menu>
<Menu>
    <a href='#'>Contato</a>
</Menu>
</BoxMenu>


</Container>

  )
}

export default Home