# -*- coding: utf-8 -*-
"""
Created on Wed Aug 23 10:53:11 2023

@author: admin
"""

import openai

# Set your OpenAI API key here
api_key = "YOUR_API_KEY"

# Initialize the OpenAI API client
openai.api_key = api_key

# Define a function to interact with the model
def interact_with_gpt(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",  # Specify the engine to use
        prompt=prompt,
        max_tokens=50  # Control the length of the response
    )
    return response.choices[0].text.strip()

# Start a conversation
conversation = ""

print("You are now chatting with GPT-3.5. Type 'exit' to end the conversation.")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break

    # Append user input to the conversation
    conversation += f"You: {user_input}\n"

    # Get model's response
    model_response = interact_with_gpt(conversation)

    print("GPT-3.5:", model_response)

    # Append model response to the conversation
    conversation += f"GPT-3.5: {model_response}\n"


