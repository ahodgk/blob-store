import Fastify from "fastify";
import FastifyVite from "@fastify/vite";
import backend from "./backend/index.ts";
const server = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

await server.register(FastifyVite, {
  root: import.meta.url,
  dev: process.argv.includes("--dev"),
  spa: true,
});

await server.register(backend);

server.get("/admin/", (req, reply) => {
  return reply.html();
});

await server.vite.ready();
await server.listen({ port: 3000 });
