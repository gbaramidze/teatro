export const runtime = 'nodejs'; // 👈 ОБЯЗАТЕЛЬНО для доступа к env

import {ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";

const S3 = new S3Client({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const manual = [
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-100.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-11.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-119.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-12.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-132.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-136.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-139.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-143.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-145.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-147.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-149.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-152.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-153.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-161.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-169.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-185.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-195.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-198.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-20.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-201.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-206.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-215.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-224.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-23.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-267.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-285.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-291.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-292.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-307.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-323.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-355.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-356.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-366.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-42.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-47.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-54.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-65.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-81.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-85.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-9.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-93.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-96.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-97.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-98.jpg",
  "https://teatro-gallery.s3.eu-central-1.amazonaws.com/20.06.2025/Teatro.20.06.25-99.jpg"
]


const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

function hasImageExtension(key) {
  return IMAGE_EXTENSIONS.some(ext => key.toLowerCase().endsWith(ext));
}

export async function GET(req, context) {
  const {id} = context.params;

  const listCommand = new ListObjectsV2Command({
    Bucket: "teatro-gallery",
    Prefix: `${id}/`,
  });

  try {
    const data = await S3.send(listCommand);

    const links = (data.Contents || [])
      .filter(item => item.Key && !item.Key.endsWith("/") && hasImageExtension(item.Key))
      .map(item => `https://teatro-gallery.s3.eu-central-1.amazonaws.com/${item.Key}`);

    return new Response(JSON.stringify(links), {status: 200});
  } catch (err) {
    console.error("S3 error:", err);
    return new Response(JSON.stringify(manual), {status: 200});
  }
}