import axios from 'axios';

class ChatGptService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY as string;
  }

  public async generateResponse(prompt: string) {
    try {
        
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              "model": "gpt-3.5-turbo-0125",
              "messages": [
                  {
                      "role": "system",
                      "content": "you're an expert in web development with vuejs .you'll only receive the vuejs code with the api option you'll have to convert to api composition with the typescript setup <script setup> don't forget the props with the interfaces. give me only the code converted to response no text from you.format the code as directly usable vuejs code."
                  },
                  {
                      "role": "user",
                      "content": prompt
                  }
              ]
          }
            ,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
              },
            }
          );

    return response.data;
    } catch (error) {
      console.error('Error generating response:', error);
      throw new Error('Could not generate response');
    }
  }
}

export default new ChatGptService();
