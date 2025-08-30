const http = require("http");
const repo = require("./repository/studentsRepository");

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    const { method, url } = req;

    if (url === "/students" && method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify(repo.getAll()));
    }

    else if (url.startsWith("/students/") && method === "GET") {
        const id = parseInt(url.split("/")[2]);
        const student = repo.getById(id);

        if (student) {
            res.statusCode = 200;
            res.end(JSON.stringify(student));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Student not found" }));
        }
    }

    else if (url === "/students" && method === "POST") {
        let body = "";

        req.on("data", chunk => (body += chunk));

        req.on("end", () => {
            const data = JSON.parse(body);

            if (!data.name || !data.email || !data.course || !data.phone) {
                res.statusCode = 400;
                res.end(JSON.stringify({
                    error: "Missing required fields: name, email, course, phone"
                }));
                return;
            }

            const newStudent = repo.create(data);
            res.statusCode = 201;
            res.end(JSON.stringify(newStudent));
        });
    }

    else if (url.startsWith("/students/") && method === "PUT") {
        const id = parseInt(url.split("/")[2]);
        let body = "";

        req.on("data", chunk => (body += chunk));

        req.on("end", () => {
            const updated = repo.update(id, JSON.parse(body));

            if (updated) {
                res.statusCode = 200;
                res.end(JSON.stringify(updated));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: "Student not found" }));
            }
        });
    }

    else if (url.startsWith("/students/") && method === "DELETE") {
        const id = parseInt(url.split("/")[2]);
        const deleted = repo.remove(id);

        if (deleted) {
            res.statusCode = 200;
            res.end(JSON.stringify(deleted));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Student not found" }));
        }
    }

    else if (url === "/ListByStatus" && method === "POST") {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            const { status } = JSON.parse(body);
            const all = repo.getAll();
            const filtered = all.filter(s => s.status === status);
            res.statusCode = 200;
            res.end(JSON.stringify(filtered));
        });
    }

    else if (url === "/ListByGrade" && method === "POST") {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            const { grade } = JSON.parse(body);
            const all = repo.getAll();
            const filtered = all.filter(s => s.grade === grade);
            res.statusCode = 200;
            res.end(JSON.stringify(filtered));
        });
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Path not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
