import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

mimetypes.add_type("application/javascript", ".js", strict=True)
mimetypes.add_type("application/javascript", ".mjs", strict=True)


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".mjs": "application/javascript",
    }


ThreadingHTTPServer(("localhost", 8000), Handler).serve_forever()
