

import os
import openai

openai.api_key = ""

with open('digital_signature.py', 'r') as file:
    # Read the entire contents of the file into a string
    file_contents = file.read()
    prompt = "##### Translate this function  from Python into JS\n### Python\n " + \
        file_contents + " ### JS"
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=prompt,
        temperature=0,
        max_tokens=100,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["### JS"]
    )
    if response.choices[0].text:
        code = response.choices[0].text.strip()
        print(code)
        file = open("example.js", "w")
        file.write(code)
        file.close()
    else:
        print("API did not return any text.")
