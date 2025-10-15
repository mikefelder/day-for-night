#!/usr/bin/env python3
import http.server
import socketserver
import os

# Change to the directory containing this script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8004

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server starting at http://localhost:{PORT}")
    print(f"Serving WordPress archive from: {os.getcwd()}")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()