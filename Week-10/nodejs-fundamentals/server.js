// ==========================================
// BASIC HTTP SERVER (Without Express)
// ==========================================
// This demonstrates how Node.js handles HTTP requests at the core level

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// Ensure files directory exists
const filesDir = path.join(__dirname, 'files');
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

// ==========================================
// ROUTE HANDLERS
// ==========================================

function handleHome(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js HTTP Server</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
                h1 { color: #333; }
                .endpoint { background: #f4f4f4; padding: 15px; margin: 10px 0; border-radius: 5px; }
                code { background: #e0e0e0; padding: 2px 6px; border-radius: 3px; }
            </style>
        </head>
        <body>
            <h1>🚀 Node.js HTTP Server</h1>
            <p>Welcome! This server demonstrates core Node.js HTTP capabilities.</p>
            
            <h2>Available Endpoints:</h2>
            <div class="endpoint">
                <h3>GET <code>/</code></h3>
                <p>This page (HTML response)</p>
            </div>
            <div class="endpoint">
                <h3>GET <code>/api/info</code></h3>
                <p>Server information (JSON response)</p>
            </div>
            <div class="endpoint">
                <h3>GET <code>/api/files</code></h3>
                <p>List files in the files directory (JSON response)</p>
            </div>
            <div class="endpoint">
                <h3>GET <code>/api/files/:filename</code></h3>
                <p>Read a specific file (JSON response)</p>
            </div>
            <div class="endpoint">
                <h3>POST <code>/api/files</code></h3>
                <p>Create a new file (JSON body: {filename, content})</p>
            </div>
        </body>
        </html>
    `);
}

function handleApiInfo(req, res) {
    const info = {
        server: 'Node.js HTTP Server',
        version: process.version,
        platform: process.platform,
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString()
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info, null, 2));
}

function handleListFiles(req, res) {
    fs.readdir(filesDir, (err, files) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read directory' }));
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ files }, null, 2));
    });
}

function handleReadFile(req, res, filename) {
    const filePath = path.join(filesDir, filename);
    
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'File not found' }));
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ filename, content: data }, null, 2));
    });
}

function handleCreateFile(req, res) {
    let body = '';
    
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        try {
            const { filename, content } = JSON.parse(body);
            if (!filename) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Filename is required' }));
                return;
            }
            const filePath = path.join(filesDir, filename);
            
            fs.writeFile(filePath, content || '', (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Failed to create file' }));
                    return;
                }
                
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, filename }, null, 2));
            });
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
    });
}

function handleNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
}

// ==========================================
// CREATE HTTP SERVER
// ==========================================

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    
    console.log(`${method} ${pathname}`);
    
    // Routing
    if (method === 'GET') {
        if (pathname === '/') {
            handleHome(req, res);
        } else if (pathname === '/api/info') {
            handleApiInfo(req, res);
        } else if (pathname === '/api/files') {
            handleListFiles(req, res);
        } else if (pathname.startsWith('/api/files/')) {
            const filename = pathname.split('/api/files/')[1];
            handleReadFile(req, res, filename);
        } else {
            handleNotFound(req, res);
        }
    } else if (method === 'POST' && pathname === '/api/files') {
        handleCreateFile(req, res);
    } else {
        handleNotFound(req, res);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}/`);
    console.log(`\nTry these endpoints:`);
    console.log(`  GET  http://localhost:${PORT}/`);
    console.log(`  GET  http://localhost:${PORT}/api/info`);
    console.log(`  GET  http://localhost:${PORT}/api/files`);
    console.log(`  POST http://localhost:${PORT}/api/files (with JSON body)`);
});
