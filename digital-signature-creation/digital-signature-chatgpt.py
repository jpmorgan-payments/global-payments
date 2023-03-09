import os
import openai
from dotenv import load_dotenv

load_dotenv()  # Load the environment variables from the .env file


openai.api_key = os.environ.get("API_KEY")


def call_chatgpt(prompt, max_tokens, output_file_name, language):
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
        if (response.choices[0].finish_reason == 'length'):
            print('Increasing max token... ' + str(max_tokens+50))
            return call_chatgpt(prompt, max_tokens+50, output_file_name, language)
        code = response.choices[0].text.strip()
        if ('```' in code):
            code = code.replace('```', '').replace(language, '')
        file = open(output_file_name, "w")
        file.write(code.replace(r"\n", "\n").strip())
        file.close()
    else:
        print("API did not return any text.")


def generate_code(language, output_file_name):
    with open('js/digital_signature.js', 'r') as file:
        # Read the entire contents of the file into a string
        file_contents = file.read().replace("\n", r"\n")
        prompt = "##### JavaScript to "+language+"\n ### js\n " + \
            file_contents+"    \n\n ### "+language,
        call_chatgpt(prompt, 350, output_file_name, language)


language_details = [
    {"language": 'python', "output_file_name": 'python/digital_signature.py'},
    {"language": 'java', "output_file_name": 'java/digital_signature.java'}

]

for item in language_details:
    print('Starting generating code for ' + item["language"])
    generate_code(item["language"], item["output_file_name"])
print('Completed code gen!')
