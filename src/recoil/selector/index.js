import axios from "axios";
import { selector } from "recoil";

const getQuestion = selector({
    key:'getQuestion',
    get: async () => {
        let question = null;
        try {
            let {data} = await axios.get("http://10.0.2.2:8000/api/questions")
            question = {question:data}
        } catch (error) {
            question = {question : error.message}
        }
        return question;
    }
});

export {getQuestion}