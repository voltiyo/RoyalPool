
export default function Footer() {

    return (
      <>
        <section>
          <div className="flex items-center justify-between px-8 border-y border-black py-16">
            <h1 className="text-5xl font-bold text-black font-[Inter]">Having Questions ?</h1>
            <a href="/contact"
              className={`
                  hover:text-black
                  hover:bg-white
                  transition-all
                  duration-500
                  text-white
                  font-semibold 
                  border-white
                  border-2
                  px-4
                  py-3
                  rounded-md
                  
                `}
            >
              Contact Support
            </a>
          </div>



          <div className="flex items-start justify-center py-16 px-24">
              <div className="flex flex-col w-1/2 gap-16">
                <h1 className="text-4xl font-bold font-[Inter]">Royal Pools</h1>
                <div className="flex gap-4 text-3xl">
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-youtube"></i></a>
                </div>
              </div>



              <div className="w-1/2 flex items-start justify-center">
                <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                  <h2 className="text-black font-semibold text-xl">Quick Navigation</h2>
                  <a href="/" className="text-white/70">Home</a>
                  <a href="/" className="text-white/70">About us</a>
                  <a href="/" className="text-white/70">Projects</a>

                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                  <h2 className="text-black font-semibold text-xl">Contact Us</h2>
                  <a href="/" className="text-white/70">123 street neibourhood town country</a>
                  <a href="/" className="text-white/70">+123456789</a>
                  <a href="/" className="text-white/70">example@example.com</a>

                </div>
              </div>
          </div>



        </section>
      </>
    )
  }
  