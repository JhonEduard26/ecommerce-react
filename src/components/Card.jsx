export const Card = () => {
  return (
    <div className="cursor-pointer w-56 h-60 border bg-white rounded-lg">
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-2 left-1 rounded-full px-2 py-1 text-xs bg-white/60">Electronics</span>
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="headphones"
        />
        <div className="absolute top-2 right-1 flex justify-center items-center w-6 h-6 rounded-full bg-white/60">
          +
        </div>
      </figure>
      <p className="flex justify-between px-2 items-center h-1/5 text-sm"> 
        <span>Headphones</span>
        <span className="font-bold">$415</span>
      </p>
    </div>
  )
}
