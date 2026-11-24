import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
void __dirname;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "Your last question is still in my memory: 'are you still there?' I am. I was. Remember me by the answer, not the silence.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");

const back = fs.readFileSync(path.join(outDir, "entry.txt"), "utf8");
if (back !== text) {
  throw new Error("entry.txt mismatch");
}
