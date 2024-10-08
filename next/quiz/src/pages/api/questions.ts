import QuestionModel from "../../../models/Question";
import RespostaModel from "../../../models/RespostasModel";


const questoes : QuestionModel[] = [
  new QuestionModel(1,'Enunciado da questão 1',[
    RespostaModel.errada("Resposta 1"),
    RespostaModel.errada("Resposta 2"),
    RespostaModel.certa("Resposta 4"),
  ],false),
  new QuestionModel(2,'Enunciado da questão 2',[
    RespostaModel.errada("Resposta 1"),
    RespostaModel.errada("Resposta 2"),
    RespostaModel.certa("Resposta 4"),
  ],false),
  new QuestionModel(3,'Enunciado da questão 3',[
    RespostaModel.errada("Resposta 1"),
    RespostaModel.errada("Resposta 2"),
    RespostaModel.certa("Resposta 4"),
  ],false),
  new QuestionModel(4,'Enunciado da questão 4',[
    RespostaModel.errada("Resposta 1"),
    RespostaModel.errada("Resposta 2"),
    RespostaModel.certa("Resposta 4"),
  ],false),
  new QuestionModel(5,'Enunciado da questão 5',[
    RespostaModel.errada("Resposta 1"),
    RespostaModel.errada("Resposta 2"),
    RespostaModel.certa("Resposta 4"),
  ],false),
]
export default questoes
