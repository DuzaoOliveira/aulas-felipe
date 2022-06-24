import type { NextPage } from 'next'
import CardOferta from '../components/CardOferta'
import Cards from '../components/CardOferta'

const Loja: NextPage = () => {
    return (
        <>
            <Cards>Você está na sua loja</Cards>
            <a href='#'>Eletro Domesticos</a>
            <a href='#'>Cama mesa e banho</a>
            <a href='#'>Smartphone</a>
            <a href='#'>Contato</a>

        </>

    )
}

export default Loja;