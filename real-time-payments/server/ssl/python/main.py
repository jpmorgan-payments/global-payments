import requests
import signal
import sys
import jwt
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

JP_MORGAN_PATH = 'https://apigatewaycat.jpmorgan.com'
PRIVATE_KEY_FILE_PATH = './private.key'
TRANSPORT_CERT_FILE_PATH = './transport.crt'
TRANSPORT_KEY_FILE_PATH = './transport.key'

class ApiProxy:
    def start_server(self):
        class ProxyHTTPRequestHandler(BaseHTTPRequestHandler):
            protocol_version = "HTTP/1.0"

            def do_GET(self):
                self._handle_request(requests.get)

            def do_DELETE(self):
                self._handle_request(requests.delete)

            def do_POST(self):
                self._handle_request(requests.post)

            def do_PUT(self):
                self._handle_request(requests.put)

            def do_PATCH(self):
                self._handle_request(requests.patch)

            def _handle_request(self,  requests_func):
                # Gather JSON body from initial request
                post_data = self.rfile.read(
                    int(self.headers["content-length"]))
                # If digitalSignature is in the URL then we need to encode the body
                if ('/digitalSignature' in self.path):
                    body = self._handle_digital_signature(post_data)

                url = JP_MORGAN_PATH + self.path.replace(
                    '/api', '').replace('/digitalSignature', '')

                # Send the request to the JP Morgan APIs with our certs
                resp = requests_func(url, data=body, cert=(
                    TRANSPORT_CERT_FILE_PATH, TRANSPORT_KEY_FILE_PATH))

                # Send response from JP APIs back to our server
                self.send_response(resp.status_code)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(resp.content)))
                self.end_headers()
                self.wfile.write(resp.content)
                self.wfile.flush()

            def _handle_digital_signature(self, body):
                corrected_body = json.loads(body.decode("utf-8"))
                with open(PRIVATE_KEY_FILE_PATH, 'r') as file:
                    # Read the contents of the private key
                    contents = file.read()
                    return jwt.encode(corrected_body, contents, algorithm="RS256")

        server_address = ('', 4242)
        self.httpd = HTTPServer(server_address, ProxyHTTPRequestHandler)
        print('proxy server is running')
        self.httpd.serve_forever()


def exit_now(signum, frame):
    sys.exit(0)


if __name__ == '__main__':
    proxy = ApiProxy()
    signal.signal(signal.SIGTERM, exit_now)
    proxy.start_server()
