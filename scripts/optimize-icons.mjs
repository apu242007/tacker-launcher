import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "public", "icons");
const SIZE = 256;

const files = (await readdir(iconsDir)).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const path = join(iconsDir, file);
  const before = (await stat(path)).size;

  const optimized = await sharp(path)
    .resize(SIZE, SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, quality: 80, effort: 10 })
    .toBuffer();

  await sharp(optimized).toFile(path);
  const after = (await stat(path)).size;

  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `${file.padEnd(26)} ${(before / 1024).toFixed(0).padStart(5)} KB -> ${(after / 1024).toFixed(0).padStart(4)} KB  (-${pct}%)`
  );
}
