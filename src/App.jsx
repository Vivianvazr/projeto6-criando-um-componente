import Profile from "./components";
export default function App (){
  return(
    <>
      <Profile nome = 'Livia' idade= '54' profissao = 'super heroi' foto = '' />
      <img src={"https://avatars.githubusercontent.com/u/178834830?v=4"} alt="" />
      <hr />
       <Profile nome = 'Vivian' idade= '8' profissao = 'fazer computaria' foto = ''/>
      <img src={"https://avatars.githubusercontent.com/u/178052883?v=4"} alt="" /> <br />
    </>
  )
}