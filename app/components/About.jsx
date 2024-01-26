import React from 'react';

const About = () => (
      <section className="mx-auto max-w-screen-xl lg:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden">
          
          {/* <img className="h-auto max-w-full rounded-2xl" src="/img/image2.jpg" alt=""/> */}

          <iframe
            src="https://www.youtube.com/embed/D3ofT5b3Ifc?rel=0&amp;loop=1&amp;autoplay=1&amp;controls=1&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;playlist=D3ofT5b3Ifc"
            frameborder="0" allowfullscreen="" uk-responsive="" className="uk-responsive-width w-full h-auto" style={{height: '338px'}}>
          </iframe>
          
          </div>
          <div className="md:p-4">
            
          </div>
        </div>
      </section>
);
export default About;