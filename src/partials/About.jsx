export default function About(){
    return(
        <>
            <section id="hero" className="bg-white py-16 flex flex-col lg:flex-row items-center justify-center px-8">
        
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-5/12 pb-7 lg:py-12 xl:w-5/12 lg:order-1">
            <p className="mb-5 font-semibold text-gray-dark md:text-lg">Welcome to our platform</p>
            <h1 className="mb-10 text-4xl font-bold text-primary lg:w-4/5">Innovative solutions for your online presence</h1>
            <p className="mb-10 text-gray-txt lg:w-4/5">Discover a new way to create stunning websites with our cutting-edge tools and resources. Let us help you bring your vision to life!</p>
            <div className="flex justify-center lg:justify-start">
                <a href="#" className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">Get Started</a>
            </div>
        </div>
      
        <div className="h-48 lg:h-auto overflow-hidden lg:order-2 lg:w-5/12 lg:px-8">
           
            <img src="/assets/images/3.jpg" loading="lazy" alt="hero photo" className="h-full w-full object-cover object-center rounded-lg bg-gray-100 shadow-lg" />
        </div>
    </section>
        </>
    )
}