import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";

const ROOT = "public/videos";

// ====================================================================
// 1. Citește recursiv toate fișierele din toate folderele
// ====================================================================
function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = entries.flatMap((entry) => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getAllFiles(res) : res;
  });

  return files;
}

// ====================================================================
// 2. Upload pentru fiecare fișier
// ====================================================================
async function uploadAll() {
  const files = getAllFiles(ROOT);

  console.log("Total files found:", files.length);

  for (const filePath of files) {
    const blobName = path.basename(filePath);

    const buffer = fs.readFileSync(filePath);

    try {
      const { url } = await put(blobName, buffer, {
        access: "public",
        addRandomSuffix: true, // prevenim coliziuni
      });

      console.log("Uploaded:", blobName, "→", url);
    } catch (err) {
      console.error("Error uploading:", blobName, err.message);
    }
  }
}

uploadAll();
