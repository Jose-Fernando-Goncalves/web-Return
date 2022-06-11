
import './App.css'
import { ArrowArcLeft, ArrowBendLeftDown, ArrowBendRightUp, Bug, CaretDoubleLeft, CaretDoubleRight, ClipboardText, Coffee, CrosshairSimple, Graph, Lightbulb, PlusCircle, User, X } from 'phosphor-react';
import { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {BugForm} from './components/bugForm';
import {IdeasForm} from "./components/ideasForm";
import {AnotherForm} from './components/anotherForm';


function App() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(false);
  const [bug, setBug] = useState(false);
  const [idea, setIdea] = useState(false);
  const [another, setAnother] = useState(false);
  const [logged, setLogged] = useState(false);


  function toggleBug(){
    setBug(true)
    setSelect(true)
  }

  function toggleAnother(){
    setAnother(true)
    setSelect(true)
  }
  function toggleIdea(){
    setIdea(true)
    setSelect(true)
  }
  function toggleShow(){
    setOpen(!open)
    setBug(false)
    setIdea(false)
    setAnother(false)
    setSelect(false)
  }

  function toggleBack(){
    setSelect(false)
    setBug(false)
    setIdea(false)
    setAnother(false)
  }

  function toggleOpen(){
    setOpen(true)
  }


  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black absolute">
      <div className="w-full h-1 flex-row flex items-center mt-10 justify-between">
        <button onClick={toggleOpen} className=" hover:rounded-r-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-violet-100 h-15 w-10 hover:w-36 rounded-full hover:animate-none my-8 mx-4 flex items-center group transition-all duration-200 ease-linear">
          <ClipboardText className="p-1 h-15 w-10" size="40"/>
          <span className=" max-w-0 overflow-hidden group-hover:max-w-xs ">FeedBack</span>
        </button>

      <div className="mr-4 flex-row flex items-center text-purple-600 gap-4">
      <ArrowBendLeftDown  size={50}  /> <span className=" text-5xl font-bold tracking-widest">ReturN</span><ArrowBendRightUp  size={50} />
      </div>

      <div className="mr-4 group">
   {logged ?    <button onClick={()=> setLogged(false)}  style={{backgroundImage: "url(https://i.pinimg.com/originals/2c/47/d7/2c47d77d32943c49b56593755907d93d.jpg)", }} className="w-12 h-12 rounded-full m-1 bg-cover flex absolute z-10"></button> : <button onClick={()=> setLogged(true)} className="text-gray-700 w-12 h-12 rounded-full m-1 bg-cover flex absolute z-10"><User className="w-12 m-1 h-12"/></button>}
        <div className=" animate-spin bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 text-violet-100 h-15 w-15 rounded-full flex items-center transition-all duration-600 ease-linear">
        <div className="w-12 h-12 m-1 rounded-full bg-black"></div>
        </div>
      </div>


      </div>

      {open ? <div className="flex justify-center w-7/10 h-[510px] relative "> 
      <div className="outline-gray-600/25 outline outline-4 outline-offset-0 items-center flex-col rounded-2xl bg-gradient-to-b from-gray-800 to-black flex solid border-4 border-l-purple-500 border-t-purple-500  border-r-pink-500  border-b-pink-500">
  {select ? 
      <div className="flex mt-4 self-start absolute ml-6">
            <button onClick={toggleBack}><ArrowArcLeft weight="bold" size="24" className=" w-full h-full text-gray-600 hover:text-purple-500"/></button>
        </div>
 : null }
        <div className="flex mt-4 self-end mr-6">
            <button onClick={toggleShow}><X weight="bold" size="24" className=" w-full h-full text-gray-600 hover:text-purple-500"/></button>
        </div>

<Player className=""
  autoplay
  loop
  src="https://assets7.lottiefiles.com/temp/lf20_iRxzMr.json"
  style={{ height: '200px', width: '350px' }}
>
</Player>
{select ? 
<div className="w-full h-full "> 
  {bug ? <BugForm /> : null}
  {idea ? <IdeasForm /> : null}
  {another ? <AnotherForm /> : null}
</div> :

<div className="flex py-8 gap-4 w-full justify-center">
    <button onClick={toggleBug} className="w-20 h-20 bg-gray-800 hover:bg-gray-900 items-center justify-center flex rounded-md text-gray-500 hover:text-lime-400 flex-col solid border-2 border-gray-900 hover:border-l-purple-500 hover:border-t-purple-500  hover:border-r-pink-500  hover:border-b-pink-500 outline-none"><Bug size="45"/><h3>BUGS</h3></button>
    <button onClick={toggleIdea} className="w-20 h-20 bg-gray-800 hover:bg-gray-900 items-center justify-center flex rounded-md text-gray-500 hover:text-amber-400 flex-col solid border-2 border-gray-900 hover:border-l-purple-500 hover:border-t-purple-500  hover:border-r-pink-500  hover:border-b-pink-500 outline-none"><Lightbulb size="45"/><h3>IDEIAS</h3></button>
    <button onClick={toggleAnother} className="w-20 h-20 bg-gray-800 hover:bg-gray-900 items-center justify-center flex rounded-md text-gray-500 hover:text-purple-500 flex-col solid border-2 border-gray-900 hover:border-l-purple-500 hover:border-t-purple-500  hover:border-r-pink-500  hover:border-b-pink-500 outline-none"><Graph size="45"/><h3>OUTROS</h3></button>
</div>
}
{select ? null : <h1 className="text-gray-600 flex bottom-11 absolute">Feito com ♥ pela RockeatSeat</h1> }
</div>

 </div> : null}

    </div>
  )
}

export default App
