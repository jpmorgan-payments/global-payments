
from dotenv import load_dotenv
import jwt
import os
load_dotenv()

DIGITAL_KEY = os.getenv('DIGITAL')
body = {}

digital_signature = jwt.encode(body, DIGITAL_KEY, algorithm="RS256")
print(digital_signature)
