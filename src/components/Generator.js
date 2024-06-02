import React, { useEffect, useState } from 'react';
import { VscGear } from 'react-icons/vsc';
import { ROUTES } from "../utilities/routes.js";
import { loadData } from "../utilities/localStorage";
import { postChatGPTMessage } from "../utilities/chatGPTUtils";

function Generator({setPage, resume, openAIKey}) {
    const [isLoading, setIsLoading] = useState(false);
    const [jobDescription, setJobDescription] = useState("");
    const [coverLetter, setCoverLetter] = useState("");

    useEffect(() => {
        const getJobDescription = async () => {
            const fetchedJob = await loadData('jobDescription');
            setJobDescription(fetchedJob);
        };
        getJobDescription();
    }, []);

    const generateCoverLetter = async () => {
        setIsLoading(true);
        try {
            // Prompt for ChatGPT API
            const message = `Generate a cover letter based on the following resume and job description:\n\nRESUME:\n${resume}\n\nJob Description:\n${jobDescription}`;
            // Helper generator function
            const chatGPTResponse = await postChatGPTMessage(message, openAIKey);
            setCoverLetter(chatGPTResponse);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
        
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between mx-5 my-3 items-center">
                <button disabled={isLoading} onClick={generateCoverLetter} className="border-2 border-solid border-blue-500 text-blue-500 text-lg font-bold rounded-md px-3 py-2 hover:text-white hover:bg-blue-500">
                    {isLoading ? "Generating..." : "Generate"}
                </button>
                <h2 className="text-2xl font-bold">LinkedIn Cover Letter Generator</h2>
                <button onClick={() => {setPage(ROUTES.PROFILE);}} className="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%] hover:bg-gray-200 hover:border-2 hover:mr-0 transition duration-300 ease-in-out">
                    <VscGear />
                </button>
            </div>
            <div className="flex mx-5">
                <textarea rows={12} className="w-full" placeholder="Generated cover letter" value={coverLetter}>

                </textarea>
            </div>
        </div>
    )
}

export default Generator
