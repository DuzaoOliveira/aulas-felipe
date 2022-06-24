import TitleStyled from "./Title.styled";

interface Props{
    children?: any;
}

const Title = ({children}:Props) => {
    return( 
  <TitleStyled>{children}</TitleStyled> 
  ) 
} 

export default Title