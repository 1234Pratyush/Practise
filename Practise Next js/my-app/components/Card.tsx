type CardProps = {
  title: string;
  description: string;
}; 

export default function Card({title,description}:CardProps){
    return (
        <div className="border px-4 py-6 rounded-lg w-80 m-10 cursor-pointer">
            <h1 className="font-bold text-xl"> Title : {title}</h1>
            <p className="font-bold">Description :  {description}</p>
        </div>
    )
}