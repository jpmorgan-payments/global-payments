# Note: you need to be using OpenAI Python v0.27.0 for the code below to work
import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load the environment variables from the .env file

openai.api_key = os.environ.get("API_KEY")

language_details = [
    {"language": 'python', "output_file_name": 'test/digital_signature.py'},
    {"language": 'Java', "output_file_name": 'test/digital_signature.java'},
    {"language": 'Go', "output_file_name": 'test/digital_signature.go'}
]

with open('js/digital_signature.js', 'r') as file:
    # Read the entire contents of the file into a string
    file_contents = file.read().replace("\n", r"\n")
    for item in language_details:
        print('Starting generating code for ' + item["language"])
        prompt = "Convert this JS code to " + \
            item["language"] + " code without any explanation? " + file_contents
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt},
            ]
        )
        print(response.choices[0].message.content)
        file = open(item["output_file_name"], "w")
        file.write(response.choices[0].message.content)
        file.close()
