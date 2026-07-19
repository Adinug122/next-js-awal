export async function GET() {
    const cuaca = {
        city:"Jakarta",
        temp:30,
        condition:"cerah"
    }

    return Response.json(
        cuaca
    )
}


export async function POST(request) {
    const body = await request.json();
    return Response.json({
        message:`data cuaca berhasil diterima ${body.city}`,
        diterima: body
    })
}