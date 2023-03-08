import os
import openai
from dotenv import load_dotenv

load_dotenv()  # Load the environment variables from the .env file


openai.api_key = os.environ.get("API_KEY")


def call_chatgpt(prompt, max_tokens, output_file_name):
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=prompt,
        temperature=0,
        max_tokens=max_tokens,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["###"]
    )
    if response.choices[0]:
        print(response.choices[0])
        if (response.choices[0].finish_reason == 'length'):
            print('Increasing max token... ' + str(max_tokens+50))
            return call_chatgpt(prompt, max_tokens+50, output_file_name)
        code = response.choices[0].text.strip()
        file = open(output_file_name, "w")
        file.write(code.replace(r"\n", "\n"))
        file.close()
    else:
        print("API did not return any text.")


def generate_code(language, output_file_name):
    with open('digital_signature.py', 'r') as file:
        # Read the entire contents of the file into a string
        file_contents = file.read().replace("\n", r"\n")
        prompt = "##### Translate this code from Python into "+language+"\n ### Python\n " + \
            file_contents+"    \n\n ### "+language,
        print(prompt)
        call_chatgpt(prompt, 350, output_file_name)


language_details = [
    {"language": 'JS', "output_file_name": 'digital_signature.js'},
    {"language": 'java', "output_file_name": 'digital_signature.java'},
    {"language": 'TS', "output_file_name": 'digital_signature.ts'},
    {"language": 'Go', "output_file_name": 'digital_signature.go'}
]

for item in language_details:
    print('Starting generating code for ' + item["language"])
    generate_code(item["language"], item["output_file_name"])
