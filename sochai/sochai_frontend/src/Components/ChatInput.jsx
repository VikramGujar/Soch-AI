import { useState } from "react";



export function ChatInput({onSubmit})
{
    const [question, setQuestion] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();

        if(question.trim())
        {
            onSubmit(question);
        }
    }

    function handleInputChange(e)
    {
        setQuestion(e.target.value);
    }

    return(
        <div className="container container-fluid my-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                <label>You Just ASK we will Think</label>
                <input 
                type="text"
                className="form-control" 
                id="question"
                placeholder="Why you are thinking Just ASK!"
                value={question}
                onChange={handleInputChange}
                />
                </div>

                <button type="submit" className="btn btn-primary my-2"> Submit </button>
            </form>
            
        </div>
    );
}