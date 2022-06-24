import { Faculdadestyled } from "./Faculdade.styled";

interface Props{
    children?: any;
    
} 

const Faculdade = ({children}:Props) => {
    return(
        <Faculdadestyled>{children}</Faculdadestyled>
    )
}

export default Faculdade