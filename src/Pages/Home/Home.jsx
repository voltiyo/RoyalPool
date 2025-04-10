import { useEffect } from "react"
import Project from "../../Components/Project/Project"
import Review from "../../Components/Review/Review"


const Reviews = [
  {
    username: "Emily",
    image: "/user.jpg",
    content: "A terrific piece of praise",
  },
  {
    username: "Jayson",
    image: "/user.jpg",
    content: "A fantastic bit of feedback",
  },
  {
    username: "Marcus",
    image: "/user.jpg",
    content: "A genuinely glowing review",
  },
]


const Projects = [
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
  {
    image: "/download.jpg",
    heading: "SubHeading",
    description: "Body text for whatever you'd like to add to the subheading"
  },
]



export default function Home() {

  useEffect(() => {
    document.querySelector("#main-img").style.transform = 'translateX(0px)'  
    document.querySelector("#main-img").style.opacity = '1'  
    document.querySelector("#main-text").style.transform = 'translateY(0px)'  
    document.querySelector("#main-text").style.opacity = '1' 
    setTimeout(() => {
      document.querySelector("#second-img").style.transform = 'translateY(0px)'  
      document.querySelector("#second-img").style.opacity = '1' 
    }, 300);
    document.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= document.querySelector('#projects').getBoundingClientRect().top + window.scrollY) {
        document.querySelector("#projects").style.transform = 'translateY(0px)'  
        document.querySelector("#projects").style.opacity = '1' 
      } else {
        document.querySelector("#projects").style.transform = 'translateY(100px)'  
        document.querySelector("#projects").style.opacity = '0' 
      }
      if (window.scrollY + window.innerHeight >= document.querySelector('#reviews').getBoundingClientRect().top + window.scrollY) {
        document.querySelector("#reviews").style.transform = 'translateY(0px)'  
        document.querySelector("#reviews").style.opacity = '1' 
      } else {
        document.querySelector("#reviews").style.transform = 'translateY(100px)'  
        document.querySelector("#reviews").style.opacity = '0' 
      }
    })
  }, [])
  
  return (
    <section>
      <div className="flex items-center justify-around h-[50vh] px-12">
        <div className="w-2/4 text-wrap flex flex-col items-start gap-8 opacity-0 translate-y-[100px]" id="main-text">
          <div>
            <h1 className="text-7xl font-[Inter] font-bold">Royal Pools</h1>
            <h2 className="text-2xl font-[Inter] font-normal">Transform your backyard into a private oasis with our expert pool building and maintenance services—where luxury meets relaxation!</h2>
          </div>
          <div>
            <a href="/Contact"
              className={`
                  text-white
                  bg-black
                  px-4
                  py-3
                  rounded-md
                  
                `}
            >
              Contact Our Advisor
            </a>
          </div>
        </div>
        <div className="w-1/4 opacity-0 translate-x-[100px]" id="main-img">
            <img src="/main.png" className="scale-x-[-1]" />
        </div>
      </div>


      <div className="flex items-center justify-center mt-36 translate-y-[100px] opacity-0" id="second-img">
        <div className="w-3/4 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
          <img src="/pool3.png" className="w-full object-cover  hover:scale-[1.01] transition-all duration-500" />
        </div>
      </div>






      <div className="px-16 mt-32 py-16 translate-y-[100px] opacity-0" id="projects">
        <h1 className="text-4xl font-[Inter] font-bold">Projects</h1>
        <div className="grid grid-cols-3">
          {
            Projects.slice(0,6).map((project, index) => (
              <div key={index}>
                <Project data={project} />
              </div>
            ))
          }
        </div>
        <div className="flex items-center justify-center">
          <a href="/projects"
            className={`
                hover:text-white
                hover:bg-black
                transition-all
                duration-500
                text-black
                border-black
                border-2
                px-4
                py-3
                rounded-md
                
              `}
          >
            {"Explore More --->"}
          </a>
        </div>
      </div>



      <div className="px-16 py-20 translate-y-[100px] opacity-0" id="reviews">
        <h1 className="text-4xl mb-6 font-bold font-[Inter]">Reviews</h1>
        <div className="grid grid-cols-3 items-center justify-around ">
          {
            Reviews.slice(0,3).map((review, index) => (
              <div key={index}>
                <Review data={review}/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
