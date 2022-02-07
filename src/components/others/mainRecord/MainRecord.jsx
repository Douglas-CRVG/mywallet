import { saveRecord } from "../../../utils/utils"
import Form from "../form/Form"

export default function MainRecord(){
    return(
        <Form inputs={ saveRecord} button="Salvar"/>
    )
}