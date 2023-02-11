import Grade from "../Grade/Grade";

function Info({question, wrong}) {
    let correct = question - wrong
    let percent = correct / question * 100

    if (percent > 89) {
        return (
            <Grade grade={5} wrong={wrong} correct={correct} question={question} />
        )

    } else if (percent > 74 && percent < 90) {
        return (
            <Grade grade={4} wrong={wrong} correct={correct} question={question} />
        )
    }
    else if (percent > 59 && percent < 75) {
        return (
            <Grade grade={3} wrong={wrong} correct={correct} question={question} />
        )
    }
    else if (percent < 60) {
        return (
            <Grade grade={2} wrong={wrong} correct={correct} question={question} />
        )
    }
}

export default Info