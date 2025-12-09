import { put } from "@vercel/blob";
import fs from "fs";

async function upload(localPath, blobName) {
  const file = fs.readFileSync(localPath);

  const { url } = await put(blobName, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  console.log("Uploaded:", url);
}

upload(process.argv[2], process.argv[3]);
