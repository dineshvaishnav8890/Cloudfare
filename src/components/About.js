import React from 'react';
import AboutImg from '../assets/about/about.jpg'; // update path/filename as needed

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={AboutImg}
            alt="About My-Marrige "
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-4xl font-bold mb-4 text-pink-700">About</h2>
          <p className="mb-4 leading-relaxed">
            Wedding is such event that happens once in a life span of a person, and so every being wants it in a splendid manner.
            Everyone has a dream wedding which they want to accomplish. Planning a wedding can be a very hectic time.
          </p>
          <p className="mb-4 leading-relaxed">
            From wherever you belong to or whatever religion you follow we will give you the wedding that you have ever dreamt of.
            We bring together, plan & organize Weddings and Renewal-Vow ceremonies with your most wanted theme. We at <strong>“MY MARRIGE”</strong>,
            get into your thoughts, be together with your desires and put in a touch of experience & professionalism to make your
            wedding day <strong>‘THE DAY‘</strong> of your life.
          </p>
          <p className="mb-4 leading-relaxed">
            We are here to make life easier for the couple getting married, by making it sure that every element of the wedding—
            decoration, dresses, photography, food or flower arrangements—is coordinated in such a way that the wedding day becomes
            unforgettable for all!
          </p>
          <p className="leading-relaxed">
            <strong>MY MARRIGE – The Wedding Planner</strong> has a passion for planning events. Whether it is a little bit of help or a lot,
            we organize the overall logistics with finesse. We save your time, money, and—most importantly—your stress, so you can truly enjoy your big day!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

