import React from 'react';

import Variables from '@/public/var/vriables';


const Footer = () => (
    <footer className='text-white'>

        
  <div className="bg-teal-500 w-full px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-15">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center md:justify-start">
        <a href='#' className='text-xl text-red-600 font-medium'>
      LOGO
    </a>

        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed md:max-w-xs md:text-left mx-auto md:mx-0">
        {Variables.text.about}
        </p>

        <ul className="mt-8 flex justify-center gap-6 md:justify-start md:gap-8">
          <li>
            <a
              href={Variables.links.facebook}
              target="_blank"
              className="transition hover:text-orange-600"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href={Variables.links.instagram}
              target="_blank"
              className=" transition hover:text-orange-600"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href={Variables.links.instagram}
              target="_blank"
              className=" transition hover:text-orange-600"
            >
              <span className="sr-only">Whatsapp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"  aria-hidden="true" fill="currentColor" >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
  </svg>
            </a>
          </li>

        </ul>
      </div>





      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
        
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium">Quick Nav</p>

          <ul className="mt-8 space-y-4 text-sm">

            <li>
              <a className="transition hover:text-orange-600" href="/#home"> Bicycle Tours </a>
            </li>

            <li>
              <a className="transition hover:text-orange-600" href="/#activities"> Bicycle Rental </a>
            </li>

            <li>
              <a className="transition hover:text-orange-600" href="/#about"> Pikala Cafe </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium">Finances & ANBI</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="transition hover:text-orange-600" href="/">
                ANBI
              </a>
            </li>

            <li>
              <a className="transition hover:text-orange-600" href="/">
                Beleidsplan
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="flex hover:text-orange-600 items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1">{Variables.text.email}</span>
              </a>
            </li>

            <li>
              <a
                className="flex hover:text-orange-600 items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1">{Variables.text.phone}</span>
              </a>
            </li>

            <li
              className="flex hover:text-orange-600 items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 flex-1 not-italic">
                {Variables.text.address}
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>





    <div className="mt-12 border-t-2 border-gray-100 pt-2">
      <div className="text-center p-3">

        <p className="mt-4 text-sm sm:mt-0">&copy; 2024 Pikala Bikes</p>
      </div>
    </div>
  </div>

        
      </footer>
);

export default Footer;