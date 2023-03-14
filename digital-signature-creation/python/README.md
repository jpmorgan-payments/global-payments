# Digital Signature Python

A python implementation of generating a digital signature

## Requirements

- Python3 install
- [Configured .env file](../README.md)

## How to run

1. Confirm `.env` configuration

Ensure the certificate keys are configured in `.env` in this directory. It should include the following keys:

```yaml
DIGITAL=...
```

2. Paste your json body into the body variable

3. Install dependencies and start the server

```
pip install -r requirements.txt
python digital_signature.py
```
