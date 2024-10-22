



export async function GET(request) {

  const token = process.env.INSTAGRAM_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: "Token de acceso no proporcionado." }), { status: 400 });
  }

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`);

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify({ error: errorData.error.message }), { status: response.status });
    }

    const data = await response.json();

    if (!data || !data.data || data.data.length === 0) {
      return new Response(JSON.stringify({ error: "No se encontraron medios." }), { status: 404 });
    }

    return new Response(JSON.stringify(data.data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {

    console.error("Error al hacer la solicitud a la API de Instagram:", error);
    return new Response(JSON.stringify({ error: "Error al procesar la solicitud." }), { status: 500 });
  }
}
