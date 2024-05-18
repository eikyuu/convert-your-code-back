// app/Controllers/Http/ChatController.ts

import ChatGptService from "#services/ChatGptService";
import { HttpContext } from "@adonisjs/core/http";


export default class ChatGptController {
  public async generateResponse({ request, response }: HttpContext) {

    const prompt: any = request.body().code;
    
    if (!prompt) {
      return response.badRequest({ error: 'Prompt is required' });
    }

    try {
      const gptResponse = await ChatGptService.generateResponse(prompt);
      return response.ok({ response: gptResponse });
    } catch (error) {
      return response.internalServerError({ error: 'Could not generate response' });
    }
  }
}
