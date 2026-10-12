const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.md': 'text/markdown; charset=utf-8'
};

const baseDir = __dirname;

function serveFile(req, res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>Requested file does not exist.</p><a href="/">Return to KanoonSaathi Portal</a>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    let filePath = path.join(baseDir, pathname);

    // Prevent directory traversal
    if (!filePath.startsWith(baseDir)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isDirectory()) {
        const indexPath = path.join(filePath, 'index.html');
        const codePath = path.join(filePath, 'code.html');

        if (fs.existsSync(indexPath)) {
          serveFile(req, res, indexPath);
        } else if (fs.existsSync(codePath)) {
          serveFile(req, res, codePath);
        } else {
          serveFile(req, res, path.join(baseDir, 'index.html'));
        }
      } else {
        serveFile(req, res, filePath);
      }
    });
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: ' + error.message);
  }
});

function startServer(port = 3000) {
  server.listen(port, () => {
    console.log(`\n=============================================================`);
    console.log(`  🏛️  KanoonSaathi Sovereign Legal Aid Platform is Running!`);
    console.log(`  🔗  Local Server:  http://localhost:${port}`);
    console.log(`=============================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, attempting port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(3000);
