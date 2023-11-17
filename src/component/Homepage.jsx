import './homepage.css';
import '../../public/css/tailwind.css';

export default function Homepage () {


  // let menunav = document.querySelector('#menunav');
  // let sticky = document.querySelector('.sticky');
  // let pagescroll = document.querySelectorAll('.page-scroll');
  // let nav = document.querySelector('#nav');
  // let menulist = document.querySelectorAll('.menulist');

  // menunav.addEventListener("click", function() {
  //     menulist.forEach(function(e) {
  //         e.classList.toggle('hidden');
  //     })
  // })

  // window.addEventListener("scroll", function() {
  //     let scrolled =  document.scrollingElement.scrollTop;
  //     if(scrolled > 0) {
  //         nav.classList.add('bg-gray-50');
  //     } else {
  //         nav.classList.remove('bg-gray-50');
  //     }
  // })


  // sticky.addEventListener('click', function(e) {
  //     window.scrollTo(0,0);
  //     e.preventDefault();
  // })


    return (
        <>
  {/* navbar code */}
  <nav className="font-poppins " id="nav">
    <div className="px-4 2xl:container 2xl:mx-auto">
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <div className="flex justify-between items-center py-2">
          <div>
            <img className="w-3/4" src="./image/logo.png" alt="" />
          </div>
          <button className="md:hidden block" id="menunav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="flex md:block hidden md:flex-row flex-col md:mt-3 menulist">
          <a href="" className="md:py-0 py-3 ">
            Home
          </a>
          <a href="" className="md:py-0 py-3 md:ml-20">
            Products
          </a>
          <a href="" className="md:py-0 py-3 md:ml-20">
           About us
          </a>
          {/* <a href="" className="md:py-0 py-3 md:ml-4">
            Apparentiships
          </a>
          <a href="" className="md:py-0 py-3 md:ml-4">
            More
          </a> */}
        </div>
        {/* <div className="flex md:block hidden md:flex-row flex-col gap-3 md:pb-0 pt-2 pb-2 menulist">
          <button className="py-2 px-6">Sign In</button>
          <button className="py-2 px-6 bg-blue-400 text-white">Login</button>
        </div> */}
      </div>
    </div>
  </nav>
  {/* end navbar code */}
  <div className="">
    {/* introduction code */}
    <div className="container mx-auto px-4 font-poppins">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:mb-32">
        <div className="relative mt-5">
          <img
            className="absolute right-0 top-0"
            src="./image/icons-plus/point-triangle.png"
            alt=""
          />
          <p className="font-medium text-lg mt-12">We Concern your Security</p>
          <h1 className="font-bold lg:text-5xl md:text-6xl text-5xl mt-3">
           MOURINA SECURITY SERVICES{" "}
          </h1>
          <p className="font-medium text-lg mt-6">
          We are dedicated to safeguarding what matters most to you.
                  With a relentless commitment to security, a wealth of industry
                  experience, and a focus on cutting-edge technology, we stand
                  as your dependable choice for all your security needs.
          </p>
          <button className="py-3 px-7 bg-blue-300 text-white mt-10">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <img
            className="absolute lg:block hidden right-10"
            src="./image/icons-plus/point-.png"
            alt=""
          />
          <img
            className="absolute -left-10 -bottom-1/2"
            src="./image/icons-plus/square-line.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="2xl:relative absolute  right-0 w-2/5 h-auto"
            src="./image/ilustrator/ilustrator.png"
            alt=""
          />
          {/* <img class="absolute top-1/4 -right-10" src="./image/icons-plus/hexagon-line.png" alt=""> */}
          <img
            className="absolute  top-3/4 right-0"
            src="./image/icons-plus/circle-half-line.png"
            alt=""
          />
        </div>
        <img
          className="absolute lg:block hidden -bottom-1/3 right-5 z-min"
          src="./image/icons-plus/plus-plus.png"
          alt=""
        />
      </div>
      {/* end introduction code */}
      {/* abous us */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:mt-96 md:mt-44 mt-16 gap-14 font-inter">
        <div className="relative">
          <div className="absolute p-3 rounded-xl flex flex-row items-center gap-3 bg-white lg:left-10 left-0 top-8 shadow-lg mx-auto w-1/2">
            <div className="p-3 rounded-md bg-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 p-1 rounded-full bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Security</p>
              <p className="font-reguler text-sm ">Secuirty Complete</p>
            </div>
          </div>
          <div className="absolute lg:p-6 p-2 rounded-lg bg-white left-0 top-32 shadow-lg w-1/2">
            <div>
              <img className="w-full" src="./image/people/person1.png" alt="" />
            </div>
            <div className="mt-6 ">
              <p className="text-sm">CCTV</p>
              <p className="font-semibold text-lg mt-2">
                Basic to higher level
              </p>
              {/* <p className="text-sm mt-2">Class 01</p> */}
              {/* <div className="flex md:flex-row flex-col gap-2 justify-between text-sm font-reguler mt-3">
                <p>Today</p>
                <p>07.PM - 09.PM</p>
                <button className="py-1 px-2 bg-purple-400 rounded-lg text-white ">
                  Join Now
                </button>
              </div> */}
            </div>
          </div>
          <div className="absolute md:p-6 p-2 rounded-lg bg-white md:right-8 right-0 shadow-lg md:w-1/2 w-2/3">
            <p className="font-semibold text-lg  text-center pt-3">
              Security Statistics
            </p>
            <div className="py-7">
              <img
                className="mx-auto "
                src="./image/icons-plus/circle-statistics.png"
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 gap-2  justify-center">
              <div className="bg-yellow-200  md:p-4 p-2 rounded-lg">
                <h4 className="text-2xl font-semibold">30%</h4>
                <p className="text-sm ">Lorem</p>
              </div>
              <div className="bg-green-200  md:p-4 p-2 rounded-lg">
                <h4 className="text-2xl font-semibold">70%</h4>
                <p className="text-sm ">Lorem</p>
              </div>
            </div>
          </div>
          {/* <img
            className="absolute right-1/3 top-2/4 z-min"
            src="./image/icons-plus/circle-half-line-2.png"
            alt=""
          /> */}
        </div>
        <div className="lg:mt-0 sm:mt-28 mt-16">
          <h1 className="text-5xl font-bold">
          At MOUNIRA SECURITY SOLUTIONS
          </h1>
          <p className="text-lg font-medium mt-6 lg:w-3/4 w-full">
          Our mission is to provide comprehensive security solutions
                tailored to your specific requirements. Whether you're looking
                for state-of-the-art CCTV systems, access control solutions, or
                other security tools, we have you covered. With years of
                expertise and a customer-centric approach, we ensure your peace
                of mind, offering more than just products - we deliver security,
                trust, and reliability.
          </p>
          <button className="mt-12">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <img
            src="./image/icons-plus/point-left.png"
            className="absolute right-0"
            alt=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 mt-72">
        {/* <img class="absolute left-5 " src="./image/icons-plus/zig-zag.png" alt=""> */}
        <div className="text-center">
          <img className="mx-auto" src="./image/icon-main/icon2.png" alt="" />
          <div className="mt-5 w-3/4 mx-auto">
            <h5 className="font-semibold text-lg">Enterprise-Grade Security</h5>
            <p className="font-medium text-sm mt-5">
            Featuring enterprise-grade encryption and regular third-party security audits, Mourina puts your security first.
            </p>
          </div>
        </div>
        <div className="text-center">
          <img className="mx-auto" src="./image/icon-main/icon1.png" alt="" />
          <div className="mt-5 w-3/4 mx-auto">
            <h5 className="font-semibold text-lg">Resource-Efficient</h5>
            <p className="font-medium text-sm mt-5">
            Mourina uses 50% less bandwidth and provides 10x better latency compared to other cloud vendors.
            </p>
          </div>
        </div>
        <div className="text-center">
          <img className="mx-auto" src="./image/icon-main/icon3.png" alt="" />
          <div className="mt-5 w-3/4 mx-auto">
            <h5 className="font-semibold text-lg">Backed by a 10-Year Warranty</h5>
            <p className="font-medium text-sm mt-5">
            All cameras use enterprise-grade components and include 10-year warranties for complete peace-of-mind.
            </p>
          </div>
        </div>
        {/* <img class="absolute right-5" src="./image/icons-plus/zig-zag.png" alt=""> */}
      </div>
      {/* end about us */}
      {/* feauture courses */}
      <div className="mt-52 font-poppins">
        <h1 className="text-3xl font-bold">Featured Product</h1>
        <p className="font-reguler text-md mt-3">
          Everything you need to when you're looking
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="bg-white rounded-t-xl">
            <div>
              <img
                className="w-full rounded-t-xl"
                src="./image/people/work.png"
                alt=""
              />
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-lg">
              CCTV CAMERA
              </h5>
              <p className="font-reguler text-sm mt-2">
              CCTV (closed-circuit television) is a TV system in which signals are not publicly distributed but are monitored, primarily for surveillance and security purposes.
              </p>
              <div className="flex flex-row justify-around items-center mt-4">
                {/* <p className="font-medium text-sm ">$450</p> */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm ">23.5 hours</span> */}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm">52 Articles</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-t-xl">
            <div>
              <img
                className="w-full rounded-t-xl"
                src="./image/people/work1.png"
                alt=""
              />
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-lg">
              Access Control
              </h5>
              <p className="font-reguler text-sm mt-2">Access control is a fundamental component of data security that dictates who's allowed to access and use company information and resources.</p>
              <div className="flex flex-row justify-around items-center mt-4">
                {/* <p className="font-medium text-sm ">$320</p> */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm ">18.5 hours</span> */}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm">27 Articless</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-t-xl">
            <div>
              <img
                className="w-full rounded-t-xl"
                src="./image/people/work2.png"
                alt=""
              />
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-lg">
              EPBAX SYSTEMS
              </h5>
              <p className="font-reguler text-sm mt-2">he electronic private automatic branch exchange (EPABX) is equipment that has made day-to-day working in the offices much simpler, especially in the area of communication.</p>
              <div className="flex flex-row justify-around items-center mt-4">
                {/* <p className="font-medium text-sm ">$620</p> */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm ">32.3 hours</span> */}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* <span className="font-medium text-sm">37 Articles</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end feauture courses */}
      {/* simple learning platform */}
      <div className="mt-32">
        <div className="flex lg:flex-row flex-col gap-14 font-poppins">
          <div className="mt-14 lg:w-1/2 w-full">
            <p className="text-md">SIMPLE SECURITY PLATFORM</p>
            <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold mt-4">
              A quality place for Security
            </h1>
            <p className="text-md font-medium mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I{" "}
            </p>
            <button className="py-3 px-6 bg-blue-400 text-white mt-10">
              Contact Us
            </button>
          </div>
          <div className="relative lg:w-1/2 w-full">
            <img
              className="w-full shadow-lg rounded-sm"
              src="./image/people/person2.png"
              alt=""
            />
            <img
              className="absolute lg:block hidden -bottom-8 -right-8 z-min"
              src="./image/icons-plus/circle-half-zig-zag.png"
              alt=""
            />
            <img
              className="absolute -top-16 -left-16 z-min"
              src="./image/icons-plus/circle-bold.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end simple learning platform */}
      {/* subscribe */}
      <div className="mt-32 relative">
        <img
          className="absolute -left-5 -top-24 "
          src="./image/icons-plus/zig-zag-2.png"
          alt=""
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 bg-green-blue">
          <div className="mx-auto my-auto md:w-auto sm:w-3/4 w-full md:px-0 px-4">
            <p className="uppercase text-md">Get Connected</p>
            <h1 className="font-bold text-4xl mt-3">
              Subscribe Us <br />
              
            </h1>
            <div className="mt-12 bg-white rounded-lg p-2 flex items-center gap-2 justify-between w-full">
              <input
                type="text"
                className="py-2 md:text-lg text-sm px-2 w-full focus:outline-none"
                placeholder="Enter your Email"
              />
              <button className="py-2 px-2 bg-blue-800 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative">
            <img className="" src="./image/icons-plus/message.png" alt="" />
            <img
              className="absolute md:block hidden -bottom-1/3 left-1/3 transform rotate-45 z-min"
              src="./image/icons-plus/circle-half-line-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end subscribe */}
      {/* footer */}
      <div className="mt-52 mb-16">
        <div className="grid lg:grid-cols-5 gap-5">
          <div>
            <p className="font-semibold text-lg">Pages</p>
            <div className="mt-5">
              <a className="block py-2" href="">
                Home
              </a>
              <a className="block py-2" href="">
                About
              </a>
              <a className="block py-2" href="">
                Products
              </a>
              {/* <a className="block py-2" href="">
                Blog
              </a> */}
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Phone No.</p>
            <div className="mt-5">
              <a className="block py-2" href="">
                011-45637993
              </a>
              {/* <a className="block py-2" href="">
                Member Stories
              </a>
              <a className="block py-2" href="">
                Video
              </a>
              <a className="block py-2" href="">
                Free Trial
              </a> */}
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Location</p>
            <div className="mt-5">
              <a className="block py-2" href="">
                Vardhman Grand Plaza, Manglam Palace Sec-3, Rohini, Delhi -110085
              </a>
              {/* <a className="block py-2" href="">
                Patnerships
              </a>
              <a className="block py-2" href="">
                Terms of use
              </a>
              <a className="block py-2" href="">
                Privacy
              </a>
              <a className="block py-2" href="">
                Sitemaps
              </a> */}
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg">Email Id</p>
            <div className="mt-5">
              <a className="block py-2" href="">
                Contact.mourina@gmail.com
              </a>
              {/* <a className="block py-2" href="">
                Patnerships
              </a>
              <a className="block py-2" href="">
                Terms of use
              </a>
              <a className="block py-2" href="">
                Privacy
              </a>
              <a className="block py-2" href="">
                Sitemaps
              </a> */}
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex justify-around items-center">
              <p className="font-semibold text-lg">Find us at</p>
              <div className=" flex justify-between">
                <div className="p-2 bg-gray-200 rounded-sm mr-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </div>
                <div className="p-2 bg-gray-200 rounded-sm mr-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="p-2 bg-gray-200 rounded-sm mr-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* <img className="w-full mt-5" src="./image/location.png" alt="" /> */}
          </div>
        </div>
      </div>
      {/* end footer  */}
    </div>
    <div className="md:px-8 md:py-8 px-4 py-4 fixed bottom-0 right-0 cursor-pointer">
      <div className="sticky px-2 py-2 rounded-md bg-gray-700 opacity-90 shadow-xl">
        <svg className="md:w-8 md:h-8 w-7 h-7  text-white" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"
          />
        </svg>
      </div>
    </div>
  </div>
 
</>
    )
}