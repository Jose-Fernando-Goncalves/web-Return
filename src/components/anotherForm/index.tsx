import html2canvas from 'html2canvas'
import { Aperture, Bug, Check, Graph, Trash } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { Loading } from '../loading';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { api } from '../../lib/apis';

export function AnotherForm(){
    const [isTakingScreenShoot, setIsTakingScreenShoot] = useState(false);
    const [screenShoot, setScreenShoot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [sended, setSended] = useState(false);
    const [empty, setEmpty] = useState(false);

   const firebaseConfig = {
        apiKey: "AIzaSyBN-d65LRI7EnLqdcdhEPZIEfvxGc_YgF8",
        authDomain: "return-11f5c.firebaseapp.com",
        projectId: "return-11f5c",
        storageBucket: "return-11f5c.appspot.com",
        messagingSenderId: "636245769540",
        appId: "1:636245769540:web:ca027df75773b9cfc66b11",
        measurementId: "G-LMHEF3C0W2"
      };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app); 

    async function handleTakeScreenshot(){
        setIsTakingScreenShoot(true)
        const canvas = html2canvas(document.querySelector('html')!);
        const base64image = (await canvas).toDataURL('image/png');
        setScreenShoot(base64image);
        setIsTakingScreenShoot(false)
        console.log(base64image)
    }

   async function handleFeedback(event:FormEvent){

            if(sended == true){
                setSended(false);
                setComment('');
            }else{
                setSended(true);
                setScreenShoot(null);
            }

        event.preventDefault();
        await  api.post('/feedback', {
            type: 'Another',
            comment: `${comment}`,
            photo: `${screenShoot}`
        })
    }


    return(
        <div className="flex gap-4 w-full h-full flex-col ">
            <div className="text-purple-500 flex-row flex gap-2 justify-center">
              {sended ? <Check size="30" className="mt-0"/> : <Graph size="30" className="mt-1"/>} 
              {sended ? <span className="text-2xl"> Sucesso!</span> :  <span className="text-3xl"> OUTROS</span>}
            </div>
        {sended ? <div className="flex w-full h-full flex-col items-center">
                    <span className="text-xl">Obrigado pelo feedback</span>
                    <button onClick={handleFeedback} className=" focus:text-purple-500 text-pink-500/80 hover:text-pink-500 bg-gray-900/30 w-36 h-12 mt-8  hover:bg-gray-800/40 rounded-md border-2 font-bold font-mono border-l-purple-500/80 border-t-purple-500/80 border-b-pink-500/80 border-r-pink-500/90 hover:border-l-purple-500 hover:border-t-purple-500 hover:border-b-pink-500 hover:border-r-pink-500"><span className="text-lg font-bold">enviar outro</span></button>
                  </div> : 
            <form className=" w-full h-2/4 px-2" onSubmit={handleFeedback}>
                <textarea  onChange={event => setComment(event.target.value)} className="m-w-[320px] focus:border-purple-500/50 w-full m-h-[120p] resize-none hover:ring-1 hover:ring-gray-700/10 h-full text-base placeholder-zinc-400 solid border-2 bg-gray-900/30 px-1 rounded-md border-gray-900 outline-none" placeholder="conte com detalhes..."/>

            <div className="flex-row gap-36 w-full flex pb-4 transition-colors">
            {screenShoot ? <button type="button" onClick={()=> setScreenShoot(null)} style={{backgroundImage: `url(${screenShoot})`, }} className="mt-2 text-gray-100/40 ml-4 hover:text-pink-500 flex items-center justify-center bg-gray-900/30 hover:bg-gray-800/40 w-12 h-12 rounded-full border-2 border-l-purple-500/75 border-t-purple-500/75 border-b-pink-500/75 border-r-pink-500/75 hover:border-l-purple-500 hover:border-t-purple-500 hover:border-b-pink-500 hover:border-r-pink-500" ><Trash size="20" weight="fill" /></button> : <button type="button" onClick={handleTakeScreenshot} className="text-pink-500/75 hover:text-pink-500 flex items-center justify-center bg-gray-900/30 hover:bg-gray-800/40 w-12 h-12 ml-4 rounded-full border-2 border-l-purple-500/75 border-t-purple-500/75 border-b-pink-500/75 border-r-pink-500/75 hover:border-l-purple-500 hover:border-t-purple-500 hover:border-b-pink-500 hover:border-r-pink-500 mt-2" >
              {isTakingScreenShoot ? <Loading /> : <Aperture size="24"/>}
            </button> }

            <button type="submit" disabled={comment.length === 0} className="mt-2 focus:text-purple-500 text-pink-500/80 hover:text-pink-500 disabled:hover:text-pink-500/30 disabled:text-pink-500/30 bg-gray-900/30 w-28 h-12 ml-4 disabled:hover:bg-gray-900/30 disabled:bg-gray-900/30 hover:bg-gray-800/40 rounded-md border-2 font-bold font-mono disabled:hover:border-l-purple-500/30 disabled:hover:border-t-purple-500/30 disabled:hover:border-b-pink-500/30 disabled:hover:border-r-pink-500/30 disabled:border-l-purple-500/30 disabled:border-t-purple-500/30 disabled:border-b-pink-500/30 disabled:border-r-pink-500/30 border-l-purple-500/80 border-t-purple-500/80 border-b-pink-500/80 border-r-pink-500/80 hover:border-l-purple-500 hover:border-t-purple-500 hover:border-b-pink-500 hover:border-r-pink-500" >
                <span className=" text-xl text-center">Send</span>
            </button>
            </div>
            </form>
            }
        </div>
    )
}