import React from 'react';

const Articles = () => (
      <section className="mx-auto max-w-screen-xl lg:my-20">
        <div>
            {/* first paragraph */}
            <h2 className='text-orange-600'>Bicycle Education & Employment</h2>
            <p>
            Morocco has a lot of unemployment problems. 29,3 % amongst youth from 15-24 is jobless. Pikala uses the bicycle to educate and employ the local youth in the tourism and technique sector. By training local girls and boys to become professional bicycle tour guides Pikala provides them with an extra income. Pikala also has a training program for young locals to become bicycle mechanics. Trained by European bicycle experts Pikala facilitates knowledge exchange between Europe and Morocco trough educational activities such as traffic safety lessons, cycling lessons for girls and the student bike project.

We offer professional bicycle tours by our trained youth and a bicycle rent out in order to support and finance our social goals.
            </p>

            <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-10">
          <div className="rounded-2xl">
          <img className="h-auto max-w-full rounded-2xl" src="/img/image1.jpg" alt=""/>
          </div>
          <div className="rounded-2xl">
          <img className="h-auto max-w-full rounded-2xl" src="/img/image2.jpg" alt=""/>
          </div>
        </div>


        </div>
        <div>
            {/* second paragraph */}
            <h2 className='text-orange-600'>Environment & Recycling</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p>
          We promote the bicycle as an alternative for polluting cars, busses and scooters to support a healthy environment. Our recycling project brings old bicycles from Holland to Marrakech and refurbishing them here to use them for social bicycle projects. To stimulate cycling amongst locals we organise bicycle events such as free bicycle fixing, bicycle art interventions and we have our own bicycle club for the local youth!

Want to join our cause? Book a bicycle tour or rent a bicycle and let's start cycling together in Marrakech!
          </p>
          <div className="rounded-2xl">
          <img className="h-auto max-w-full rounded-2xl" src="/img/image3.jpg" alt=""/>
          <img className="h-auto max-w-full rounded-2xl" src="/img/image4.jpg" alt=""/>
          </div>
        </div>


        </div>
      </section>
);
export default Articles;