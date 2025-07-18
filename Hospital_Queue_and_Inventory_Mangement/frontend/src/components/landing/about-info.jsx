export default function AboutInfo() {
    return (
      <section id="about">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-3xl">
            About Us
          </h2>

          <p className="mt-4 text-gray-700">
          Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. 
          We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
          
          Explore our extensive collection of expertly written article and guides covering a wide range of health topics. 
          From understanding common medical condition to tips for maintaining a healthy lifestyle, our content is designed to educate, 
          inspire, and support you in making informed choices for your health.

          Discover practical health tips and lifestyle advice to optimise your physical and mental well-being. We believe that 
          small changes can lead to significant improvements in your quality of life, and we'are here to guide you on your path to a 
          healthier and happier you.
          </p>
        </div>
      </div>    

      <div>
        <img
          src="/About.jpg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
    );
  }