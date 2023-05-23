export const ProductDetail = () => {
  return (
    <aside className="flex flex-col w-64 h-5/6 fixed right-0 p-4 rounded-md border border-black">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Detail</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  )
}
