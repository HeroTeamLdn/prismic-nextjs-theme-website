import next from "next";
const express = require("express");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/blog", (req, res) => {
      const params = { uid: "blog" };
      app.render(req, res, "/blog", params);
    });

    server.get("/blog/:uid", (req, res) => {
      const params = { uid: req.params.uid };
      app.render(req, res, "/blog/[uid]", params);
    });

    server.get("/page/:uid", (req, res) => {
      const params = { pageUid: req.params.pageUid };
      app.render(req, res, "/page/[uid]", params);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
