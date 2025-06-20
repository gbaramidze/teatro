import QRCode from 'qrcode';

export async function GET(req, {params}) {
  const id = params.id;

  if (!id) {
    return new Response('Missing ID', {status: 400});
  }

  try {
    const qrBuffer = await QRCode.toBuffer(id, {
      type: 'png',
      errorCorrectionLevel: 'H',
      margin: 2,
      scale: 6,
    });

    return new Response(qrBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000', // Cache forever
      },
    });
  } catch (err) {
    console.error(err);
    return new Response('QR generation failed', {status: 500});
  }
}
