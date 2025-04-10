

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-12 ">

      
      <div>
        <img src="/logo.png" className="w-28 mt-4" />
      </div>

      
      <div className="flex items-center justify-center gap-4 text-xl">
        <a href="/">Home</a>
        <a href="/About-us">About</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact"
          className={`
              text-white
              bg-black
              px-4
              py-3
              rounded-md
            `}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
