export default {
  async fetch(request, env, ctx) {
    const { searchParams } = new URL(request.url);
    const mediaUrl = searchParams.get('mu');

    const accountSid = env.SID;
    const authToken = env.TOKEN;

    if (!mediaUrl) {
      return new Response(JSON.stringify({ error: 'Missing media URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const response = await fetch(mediaUrl, {
        headers: {
          'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`)
        }
      });

      if (response.ok) {
        const headers = new Headers();
        const contentType = response.headers.get('content-type');
        const contentLength = response.headers.get('content-length');

        if (contentType) headers.set('Content-Type', contentType);
        if (contentLength) headers.set('Content-Length', contentLength);

        const body = await response.arrayBuffer();

        return new Response(body, {
          status: 200,
          headers
        });
      }
    } catch (err) {
      // Optional: Log or report error
    }

    return new Response(JSON.stringify({ error: 'Failed to load media' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
