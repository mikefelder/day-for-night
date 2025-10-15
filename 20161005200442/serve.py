#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
from pathlib import Path

PORT = 8006

class HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path = '/index_clean.html'
        return super().do_GET()

if __name__ == "__main__":
    web_dir = Path(__file__).parent
    print(f"Day For Night 2016 Festival Archive")
    print(f"Serving files from: {web_dir}")
    print(f"Server running at: http://localhost:{PORT}/")
    print("Press Ctrl+C to stop the server")
    
    with socketserver.TCPServer(("", PORT), HTTPRequestHandler) as httpd:
        try:
            webbrowser.open(f'http://localhost:{PORT}/')
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")