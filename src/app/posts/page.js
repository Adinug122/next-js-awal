export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

if(!response.ok){
    throw new Error('data gagal didapatkan')
}
const data = await response.json();
return<>
{data.map((item) => (
    <div key={item.id}>
    <h1 className="text-4xl text-red-500">
        {item.title}
    </h1>
    <p className="text-xl text-red-400">
        {item.body}
    </p>
    </div>
))} 
</>
}
