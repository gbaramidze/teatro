import {ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";

const S3 = new S3Client({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

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
    return new Response(JSON.stringify({error: "Failed to fetch links"}), {status: 500});
  }
}