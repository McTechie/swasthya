import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const prompt = req.body.prompt
  console.log(prompt)

  if (!prompt || prompt === '') {
    return new Response('Please send your prompt', { status: 400 })
  }

  const aiResult = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.9,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0
  })

  const response = aiResult.data.choices[0] || 'Sorry, there was a problem!'
  console.log(response)
  res.status(200).json({ text: response })
}