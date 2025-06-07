"use client"

export const Cookie1 = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border max-w-sm">
      <p className="text-sm mb-3">This site uses cookies to enhance your experience.</p>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            localStorage.setItem("cookies-accepted", "true")
            const banner = document.querySelector(".cookie-banner") as HTMLElement
            if (banner) banner.style.display = "none"
          }}
        >
          Accept
        </button>
        <button
          className="px-3 py-1 text-xs border rounded hover:bg-gray-100"
          onClick={() => {
            const banner = document.querySelector(".cookie-banner") as HTMLElement
            if (banner) banner.style.display = "none"
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}