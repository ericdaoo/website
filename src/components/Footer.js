import React, { useState, useEffect } from "react"
import { BiCurrentLocation } from "react-icons/bi"
import WordFilters from "./WordFilters"

const Footer = () => {

    const [formQuestion, setFormQuestion] = useState(1)

    const nextQuestionHandler = (e) => {
        e.preventDefault()
        const nextQuestion = parseInt(e.target.value)
        const questionName = e.target.name
        if (nextQuestion > 2 && ((!inputs[questionName]) || inputs[questionName] === "test" || WordFilters.includes(inputs[questionName]) )) {
            console.log('good')
        }
        else if (nextQuestion === "0") {
            setFormQuestion(0)
        }
        else {
            setFormQuestion(nextQuestion)
        }
    }

    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    useEffect(() => {

    }, [])

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxUbOuS5cJfcMj20XzZs_njg2pYXypEebiDa82XCixxnDevVG4/exec'
    const form = document.forms['submit-to-google-sheet']

    const handleSubmit = (e) => {
        e.preventDefault()
        var data = new FormData()
        for (var key in inputs) {
            data.append(key, inputs[key])
        }
        fetch(scriptURL, { method: 'POST', body: data })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    }

    const question1 =
        <div id="calico" className="question-bubble" hidden={formQuestion !== 1} style={{ width: "300px" }}>
            <p>Before you go, would you like to teach me how to say <span className="highlight">goodbye</span> in another language?</p>
            <div className="question-container">
                <button onClick={nextQuestionHandler} value="2">Sure🙂</button>
                <button onClick={nextQuestionHandler} value="0">Maybe next time😅</button>
            </div>
        </div>

    const question2 =
        <div hidden={formQuestion !== 2} >
            <div id="calico" className="question-bubble2" style={{}}>So far, these are some of the ways I already know how to say "goodbye":<br></br>Au revoir, <br></br>Bonne Journée, <br></br>拜拜 <br></br>再見</div>
            <div id="calico" className="question-bubble">
                <p>Cool, let me hear it.</p>
                <form name="question2">
                    <input name="bye" type="text" placeHolder='("Goodbye" in another language)' value={inputs.bye || ""} onChange={handleChange} maxLength="20" />
                    <div className="question-container">
                        <button name="bye" onClick={nextQuestionHandler} value="1">Back</button>
                        <button name="bye" onClick={nextQuestionHandler} value="3">Next</button>
                    </div>
                </form>
            </div>
        </div>


    const question3 =
        <div hidden={formQuestion !== 3} >
            <div id="calico" className="question-bubble">
                <p>Hmm..."{inputs.bye}"? <br></br>What <span className="highlight">language</span> is this?</p>
                <form name="question2">

                    <input name="language" type="text" placeHolder="(language)" value={inputs.language || ""} onChange={handleChange} maxLength="20" required/>
                    <div className="question-container">
                        <button name="language" onClick={nextQuestionHandler} value="2">Back</button>
                        <button name="language" onClick={nextQuestionHandler} value="4">Next</button>
                    </div>
                </form>
            </div>
        </div>

    const question4 =
    <div hidden={formQuestion !== 4} >
        <div id="calico" className="question-bubble">
            <p>Okie Dokes, "{inputs.bye}" is how you say "goodbye" in {inputs.language} .<br></br>I'll share this with Eric. And who is it that I should tell him taught me this?</p>
            <form name="question2">

                <input name="name" type="text" placeHolder="(First Name)" value={inputs.name || ''} onChange={handleChange} maxLength="20" />
                <div className="question-container">
                    <button name="name" onClick={nextQuestionHandler} value="3">Back</button>
                    <button name="name" onClick={nextQuestionHandler} value="0">Next</button>
                </div>
            </form>
        </div>
    </div>

    const question0 =
        <div hidden={formQuestion !== 0}>
            <p id="calico" className="bye-bubble">Okie Dokes!<br></br> See Ya!</p>
        </div>



    return (
        <div className="footer" id="footer">
            <h2 className="line-color"> Bye</h2>
            <div className="footer-container">
                <div id="calico" className="bye-container">
                    {/* <div id="calico" className="question-bubble" style={{animationName : (formQuestion >= 1) ? "none" : "fade"}}> */}
                    {question1}
                    {question2}
                    {question3}
                    {question4}
                    {question0}
                    <img id="calico" src="/website/images/calico.png" className="bye-cat"></img>
                </div>
                <div id="orange" className="bye-container" hidden={formQuestion !== 0}>
                    <p id="orange" className="bye-bubble">Au<br></br>Revoir</p>
                    <img id="orange" src="/website/images/orange.png" className="bye-cat"></img>
                </div>
                <div id="siamese" className="bye-container" hidden={formQuestion !== 0}>
                    <p id="siamese" className="bye-bubble">拜拜</p>
                    <img id="siamese" src="/website/images/siamese.png" className="bye-cat"></img>
                </div>
                <div id="black" className="bye-container" hidden={formQuestion !== 0}>
                    <p id="black" className="bye-bubble">Good<br></br>Bye</p>
                    <img id="black" src="/website/images/black.png" className="bye-cat"></img>
                </div>
                <div id="tabby" className="bye-container" hidden={formQuestion !== 0}>
                    <p id="tabby" className="bye-bubble">Bonne <br></br>Journée</p>
                    <img id="tabby" src="/website/images/tabby.png" className="bye-cat"></img>
                </div>
                <div id="white" className="bye-container" hidden={formQuestion !== 0}>
                    <p id="white" className="bye-bubble">再見</p>
                    <img id="white" src="/website/images/white.png" className="bye-cat"></img>
                </div>


            </div>
        </div>
    )
}

export default Footer