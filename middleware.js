// Password gate for the private Camino case study only.
// The password comes from the CAMINO_PASSWORD environment variable in Vercel.
// If it is not set, nobody gets in.

export const config = {
  matcher: [
    '/works/camino',
    '/works/camino.html',
    '/works/camino-prototype',
    '/works/camino-prototype.html',
    '/works/assets/camino/:path*',
  ],
};

// Same as next() from @vercel/functions: let the request continue to the page.
function next() {
  return new Response(null, { headers: { 'x-middleware-next': '1' } });
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export default function middleware(request) {
  const password = process.env.CAMINO_PASSWORD;
  const header = request.headers.get('authorization') || '';

  if (password && header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const given = decoded.slice(decoded.indexOf(':') + 1);
      if (safeEqual(given, password)) return next();
    } catch (e) {
      // Malformed header: fall through to the login prompt.
    }
  }

  return new Response('This case study is private.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Camino case study", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
}
