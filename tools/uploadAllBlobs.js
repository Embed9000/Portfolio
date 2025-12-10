import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";

async function uploadVideo(filePath) {
  const fileBuffer = fs.readFileSync(filePath);

  // EXTRACT NUMELE FIȘIERULUI
  const blobName = path.basename(filePath);

  const { url } = await put(blobName, fileBuffer, {
    access: "public",
    allowOverwrite: true,
  });

  console.log(`Uploaded: ${blobName} → ${url}`);
}

async function uploadAll() {
  const folders = [
    "./public/videos/anaria",
    "./public/videos/anariaReborn",
    "./public/videos/bettyAdventure",
  ];

  for (const folder of folders) {
    const files = fs.readdirSync(folder);

    for (const file of files) {
      const fullPath = path.join(folder, file);

      // doar fișiere video
      if (file.toLowerCase().endsWith(".mp4")) {
        await uploadVideo(fullPath);
      }
    }
  }
}

uploadAll();
