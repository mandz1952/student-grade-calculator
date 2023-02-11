import {useState} from "react";
import React from "react";
import c from './Calc.module.css'

function Calc({question, wrong, setQuestion, setWrong}) {

    const [qval, setQval] = useState('')
    const [wval, setWval] = useState('')

    function calcGrade(question, wrong) {
        if (+wrong > +question) {
            setWrong(qval)
            setWval(qval)
        } else {
            setQuestion(qval)
            setWrong(wval)
        }
    }

    return (
        <div className={c.conteiner}>
            <div className={c.formGroup}>
                <p>Кол-во вопросов</p>
                <input value={qval}
                       onChange={(e) => setQval(e.target.value)}
                       />
            </div>
            <div className={c.formGroup}>
                <p>Кол-во ошибок</p>
                <input type="text"
                       value={wval}
                       onChange={(e) => setWval(e.target.value)}
                       />
            </div>
            <div>
                <button onClick={() => calcGrade(question, wrong)}>
                    Рассчитать
                </button>
            </div>
        </div>
    )
}

export default Calc