import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    // <section className="landing">
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1 className="text-6xl text-red-600">Developer Connector</h1>
    //       <p className="lead">
    //         Create a developer profile/portfolio, share posts and get help from
    //         other developers
    //       </p>
    //       <div className="buttons">
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //         <Link to="/login" className="btn btn-light">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className=' dark bg-gray-800'>

      <section className="p-8 md:py-20 bg-gray-900 text-white dark:bg-gray-800">
        <article className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl mb-6 lg:text-5xl">
            Build The Community You Will Love
          </h1>

          <p className="text-lg leading-loose mb-8 lg:text-xl lg:leading-relaxed lg:w-2/3 lg:mx-auto">
            Devhub re-imagines the way we build communities. If you are a tech lover but
            struggling to connect with many people, create meaningful connections through genuine discussions.
          </p>

          <Link to='/register'>
  <button className="bg-success hover:shadow-lg doe py-3 px-6 rounded-full text-white shadow-md text-lg lg:text-xl  transition duration-300">
    Get Started For Free
  </button>
</Link>

        </article>

        <article className="my-8">
          <img src="https://shwetakshipriya.github.io/landing-page/images/screen-mockups.svg" alt="App Mockups" className="block mx-auto max-w-full h-auto" />
        </article>
      </section>



      <article className="p-8 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 max-w-3xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="text-center">
          <img src="https://shwetakshipriya.github.io/landing-page/images/icon-communities.svg" alt="Communities Icon" className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl mt-4 mb-2">1.4k+</h2>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Connections Formed</p>
        </div>

        <div className="text-center">
          <img src="https://shwetakshipriya.github.io/landing-page/images/icon-messages.svg" alt="Messages Icon" className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl mt-4 mb-2">1k</h2>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Messages Sent</p>
        </div>
      </article>

      <section>
        <article className="relative overflow-hidden">
          <picture>
            <source media="(min-width: 768px)" srcset="./images/bg-section-top-desktop-1.svg" />
            <img src="https://shwetakshipriya.github.io/landing-page/images/bg-section-top-desktop-1.svg" alt="" className="w-full" />
          </picture>

          <div className="bg-blue-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-20 px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:place-items-center">
              <article className="text-center md:text-left">
                <h3 className="text-2xl text-blue-900 dark:text-white mb-8 md:text-3xl lg:text-4xl  dark:bg-gray-800">
                  Grow Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose mb-8 lg:text-base lg:leading-relaxed">
                  Generate meaningful discussions with your audience and build a strong, loyal community.
                  Think of the insightful conversations you miss out on with a feedback form.
                </p>
              </article>

              <article>
                <img src="https://shwetakshipriya.github.io/landing-page/images/illustration-grow-together.svg" alt="" />
              </article>
            </div>
          </div>

          <article className="absolute bottom-0 left-0 right-0">
            <picture>
              <source media="(min-width: 768px)" srcset="./images/bg-section-bottom-desktop-1.svg" />
              <img src="./images/bg-section-bottom-mobile-1.svg" alt="" className="w-full" />
            </picture>
          </article>
        </article>


        <article className="relative overflow-hidden">
          <div className="bg-blue-50 dark:bg-gray-800">
            <div className="py-20 px-8 flex flex-col-reverse md:flex-row-reverse gap-16 max-w-7xl mx-auto md:place-items-center">
              <article className="text-center md:text-left">
                <h3 className="text-2xl text-blue-900 dark:text-white mb-8 md:text-3xl lg:text-4xl">
                  Flowing Conversations
                </h3>
                <p class="text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-sm leading-loose mb-8 lg:text-base lg:leading-relaxed">
  You wouldn't be able to connect with so many people at a time.
  But why worry when you have Devhub?
  You can connect with many people simultaneously and have flowing conversations with them.
</p>

              </article>

              <article>
                <img src="https://shwetakshipriya.github.io/landing-page/images/illustration-flowing-conversation.svg" alt="" />
              </article>
            </div>
          </div>
        </article>


        <article className="relative overflow-hidden">
          {/* <picture>
    <source
      media="(min-width: 768px)"
      srcSet="https://shwetakshipriya.github.io/landing-page/images/bg-section-top-desktop-2.svg"
    />
    <img src="https://shwetakshipriya.github.io/landing-page/images/bg-section-top-desktop-2.svg" alt="" className="w-full" />
  </picture> */}

          <div className="bg-blue-50 dark:bg-gray-800">
            <div className="py-20 px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:place-items-center max-w-7xl mx-auto">
              <article className="text-center md:text-left">
                <h3 className="text-2xl text-blue-900 dark:text-white mb-8 md:text-3xl lg:text-4xl">
                  Our Users
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose mb-8 lg:text-base lg:leading-relaxed">
                  It takes no time at all to connect with Devhub users and start
                  getting in touch with like-minded people.
                </p>
              </article>

              <article>
                <img src="https://shwetakshipriya.github.io/landing-page/images/illustration-your-users.svg" alt="" />
              </article>
            </div>
          </div>

          {/* <picture>
    <source
      media="(min-width: 768px)"
      srcSet="./images/bg-section-bottom-desktop-2.svg"
    />
    <img src="./images/bg-section-bottom-mobile-2.svg" alt="" className="w-full" />
  </picture> */}
        </article>

      </section>

      <section className="px-8 py-20 lg:py-40 flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl lg:text-5xl text-center text-gray-900 dark:text-white">
          Ready To Build Your Community?
        </h2>
        <Link to="/register">
  <button className="bg-success py-3 px-5 rounded-full text-white shadow text-sm lg:text-base hover:bg-accent-200">
    Get Started For Free
  </button>
</Link>

      </section>


      {/* <article>
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="./images/bg-footer-top-desktop.svg"
          />
          <img src="./images/bg-footer-top-mobile.svg" alt="" className="w-full" />
        </picture>
      </article> */}
      <footer className="py-20 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <article>
            <img src="./images/footer-logo.svg" alt="" className="w-40 lg:w-auto mb-8" />

            <p className="text-white text-sm leading-loose lg:text-base lg:leading-relaxed mb-8">
              Connect with us on social media and get to know more about us.
            </p>

            <ul className="flex gap-4 flex-col mb-12">
              <li className="flex text-white gap-2 items-center">
                <img src="./images/icon-phone.svg" alt="" /> Phone: +1-543-123-4567
              </li>
              <li className="flex text-white gap-2 items-center">
                <img src="./images/icon-email.svg" alt="" /> devhub@gmail.com
              </li>
            </ul>

            <ul className="flex items-center justify-start gap-4">
              <li className="text-white text-3xl hover:text-accent transition-colors"><i className="fab fa-facebook"></i></li>
              <li className="text-white text-3xl hover:text-accent transition-colors"><i className="fab fa-instagram"></i></li>
              <li className="text-white text-3xl hover:text-accent transition-colors"><i className="fab fa-linkedin"></i></li>
            </ul>
          </article>

          <article className="md:w-2/3 md:ml-auto">
            <h4 className="text-white uppercase text-xl mb-8 tracking-widest">
              Newsletter
            </h4>
            <p className="text-white text-sm leading-loose lg:text-base lg:leading-relaxed mb-8">
              To receive tips on how to grow your community, sign up for our weekly newsletter.
              We’ll never send you spam or pass on your email address.
            </p>

            <form className="flex flex-col items-end lg:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="py-2 px-4 text-pink-600 w-full mb-4 rounded-lg lg:mb-0 lg:mr-4 bg-gray-800"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-accent py-2 px-4 rounded text-white shadow text-sm lg:text-base"
              />
            </form>
          </article>
        </div>
      </footer>

      <footer className="text-center py-4 bg-gray-900 text-white">
  <p className="attribution">
    Project done by
    <a
      href="https://github.com/Saurabh13042004/devconnector"
      target="_blank"
      rel='noreferrer'
      className="text-pink-400 hover:underline"
    >
      Dev connectors
    </a>
    Coded by
    <a href="#" className="text-pink-400 hover:underline">
      Dev Connectors
    </a>
  </p>
</footer>

    </div>

  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
