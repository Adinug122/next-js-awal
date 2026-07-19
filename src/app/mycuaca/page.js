
export default async function myCuacaPage() {
  const response = await fetch('http://localhost:3000/api/weather')
  if(!response.ok){
    throw new Error('error data ga tampil')
  }
  const data = await response.json();
    return (
    <>
 
  <div >
    <h4 className="text-2xl text-white">
      {data.city}
    </h4>

    <p className="text-2xl text-white">
      {data.temp}
    </p>

    <h4 className="text-2xl text-white">
      {data.condition}
    </h4>
  </div>

    </>
  )
}
