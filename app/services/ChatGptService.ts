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
                    "content": "tu es un expert en développement web avec vuejs et nuxtjs. tu dois convertir du code vuejs ou nuxtjs avec API options en API composition. exemple de code converti  en API composition:  `<script setup lang='ts'> import { ref, onMounted, watch  } from 'vue'    export interface Props {   msg?: string   labels?: string[]   title?: String   likes?: Number   count?: Number }  const props = withDefaults(defineProps<Props>(), {   msg: 'hello',   labels: () => ['one', 'two'],   count: 0,   title: 'toto' })  const message = ref('Hello World!') const count = ref(props.count)  onMounted(() => {   message.value = 'on mounted' })    watch(count, (newCount) => {   // yes, console.log() is a side effect   console.log(`new count is: ${newCount}`) }) </script>  <template>   <h1>{{ message }}</h1>   <h1>{{count}}</h1>   <p>{{title}}</p> </template>`  base toi sur l'exemple pour convertir code, n'oublie pas l'interface ni les props et le withDefaults si une props a une valeur par defaut. donne moi seulement le code converti en réponse pas de texte de ta part juste le code a copier coller directement."
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


