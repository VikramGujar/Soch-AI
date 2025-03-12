


export function ChatResponse( {response})
{
    if(!response)
    {
        return null;
    }


    const {candidates, usageMetadata} = response;

    
    return(
        <div>
            <h1> You Answer </h1>
            <p>
                {
                    candidates.map((candidate, index) =>(
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <p className="card-text">
                                    {candidate.content.parts[0].text}
                                </p>

                            </div>

                        </div>
                    ))
                }
            </p>
        </div>
    );
}