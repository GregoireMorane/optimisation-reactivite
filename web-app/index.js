const compression = require("compression");
const express = require("express");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .use(compression())
    .get("/films/:slug", (req, res) => {
      return app.render(req, res, "/film-detail-showtimes", {
        slug: req.params.slug
      });
    })
    .get("*", (req, res) => handle(req, res))
    .listen(3000, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${3000}`);
    });
});
