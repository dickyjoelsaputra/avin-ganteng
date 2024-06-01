import React from "react";

function Home() {
  return (
    <>
      <section id="home" class="bg-white py-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">

          <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 class="text-5xl font-bold mb-4">Free <span class="text-primary">Tailwind</span> Template</h2>
            <p class="my-7">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike
              other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as
              buttons or tables.</p>
            <div class="space-x-2">
              <a href="/"
                class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">Download</a>
            </div>
          </div>

          <div class="md:w-1/2">
            <img src="/assets/images/1.jpg" alt="Image" class="w-full md:mx-auto md:max-w-md rounded-lg bg-gray-100 shadow-lg" />
          </div>
        </div>
      </section>

      <section id="aboutus" class="py-16 bg-gray-dark">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">

          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="/assets//images/2.jpg" alt="Image" class="w-full md:mx-auto md:max-w-md rounded-lg bg-gray-100 shadow-lg" />
          </div>

          <div class="md:w-1/2">
            <h2 class="text-5xl font-bold mb-4 text-white">Our <span class="text-primary">Process</span></h2>
            <p class="my-5 text-white">At Our company, we follow a well-defined process to ensure the success of every project. Our approach is tailored to meet your unique requirements and deliver outstanding outcomes consistently.</p>
            <ol class="mt-5 mb-10 list-outside">
              <li class="flex items-center mb-4">
                <strong class="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">1</strong>
                <span class="text-white">We start by conducting a thorough analysis of your needs and goals.</span>
              </li>
              <li class="flex items-center mb-4">
                <strong class="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">2</strong>
                <span class="text-white">Our team collaborates closely with you to craft a customized strategy.</span>
              </li>
              <li class="flex items-center mb-4">
                <strong class="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">3</strong>
                <span class="text-white">We execute the plan meticulously, ensuring clear communication throughout the process.</span>
              </li>
              <li class="flex items-center mb-4">
                <strong class="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">4</strong>
                <span class="text-white">Regular updates and feedback sessions keep you informed and involved.</span>
              </li>
              <li class="flex items-center mb-4">
                <strong class="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">5</strong>
                <span class="text-white">We deliver the final product with precision, meeting your expectations and beyond.</span>
              </li>
            </ol>
            <button class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
