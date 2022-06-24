// import CardOfertaStyled from './CardOferta.styled'
import * as S from "./CardOferta.styled"

interface Props{
    children: any;
}

const Cards = ({children}:Props) => {
    return(
        <S.Cards>{children}</S.Cards>
    )
}

export default Cards;