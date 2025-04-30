import './style.css'

export default function Profile ({nome,idade,profissao,foto}){
      return(
        <>
            <p>Nome: {nome}</p>
            <p>Idade: {idade} anos</p>
            <p>Profissão: {profissao}</p>
            <p>Foto: {foto}</p>
        </>
      )
}

