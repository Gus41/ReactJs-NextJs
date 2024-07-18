import QuestionModel from "../../models/Question";
import RespostaModel from "../../models/RespostasModel";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";


const questaoMock = new QuestionModel(1,'Enunciado 0',[
  new RespostaModel('Resposta n 1',false,false),
  new RespostaModel('Resposta n 2',true,false),
  new RespostaModel('Resposta n 3',false,false),
],false) 
const REPLIT_BASE_URL = 'https://93fe129d-04c1-4d2c-b3f2-a93b77119ad7-00-2qpsir5s2xr6b.riker.replit.dev/api'
const BASE_URL = 'http://localhost:3000/api'


export default function Home(){
  const [ids,setIds] = useState<number[]>([])
  const [questao,setQuestao] = useState<QuestionModel>(questaoMock)
  const [acertos,setAcertos] = useState<number>(0)
  const router = useRouter()

  async function loadQuestionsIds(){
    const response = await fetch(`${REPLIT_BASE_URL}/questionario`)
    const questionsIds = await response.json()
    setIds(questionsIds)
  }
  async function loadQuestion(id : number){
    const response = await fetch(`${REPLIT_BASE_URL}/questoes/${id}`)
    const questaoJson : QuestionModel = await response.json()
    const quest = new QuestionModel(questaoJson.id,questaoJson.enunciado,questaoJson.respostas,questaoJson.acertou)
    
    setQuestao(quest)
  }
  useEffect(()=>{
    loadQuestionsIds()
  },[])

  useEffect(()=>{
    ids.length > 0 && loadQuestion(ids[0])
  },[ids])

  function onResponse(indice: number){
    if(!questao.respondida){
      setQuestao(questao.responder(indice))
      const certa = questao.acertou
      if(certa){
        let n = acertos + 1
        setAcertos(n)
      }
    }
  }
  function getNextId(){
    const next = ids.indexOf(questao.id) + 1
    return ids[next]
    
  }
  function goNextQuestion(id: number){
    console.log(id)
    loadQuestion(id)
  }
  function finalize(){
    router.push({
      pathname:'/resultados',
      query : {
        total : ids.length,
        acertos : acertos
      }
    })
  }
  function goNext(){
    const nextId = getNextId()
    nextId ? goNextQuestion(nextId) : finalize()
  }
  return <Questionario
        questao={questao}
        isLast={ getNextId() === undefined }
        onResponse={onResponse}
        goNext={goNext}
        key={questao.id}
        />
}