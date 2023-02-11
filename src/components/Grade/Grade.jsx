import c from "./Grade.module.css"

function Grade({grade, wrong, question, correct}) {
    return (
        <div className={c.conteiner}>
            <div><p>Оценка</p></div>
            <div><p>Неправильно</p></div>
            <div><p>Верно</p></div>
            <div><p>Вопросы</p></div>
            <div className={c.infp}>{grade}</div>
            <div className={c.infp}>{wrong}</div>
            <div className={c.infp}>{correct}</div>
            <div className={c.infp}>{question}</div>
        </div>
    )
}

export default Grade