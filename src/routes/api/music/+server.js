import fs from "fs";
import path from "path";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const musicDir = path.join(process.env.HOME, "Desktop/music");
  const songs = fs
    .readdirSync(musicDir)
    .filter((file) => file.endsWith(".mp3"));
  return json(songs);
}
