import React from 'react';

function Chairman(isFeed) {
  return (
    <div
      data-aos="fade-right"
      className={`space-y-4 m-8 md:p-8 ${
        isFeed
          ? 'hidden lg:block border-1 m-8 shadow-xl bg-white p-8 rounded-md'
          : ''
      }`}>
      <div className="text-primary-light font-bold text-2xl mb-8 border-l-4 pl-4 border-primary-light overflow-x-hidden">
        <h1 data-aos="fade-right">Message from the Chairman of Committee</h1>
      </div>
      <div>
        <p>
          The Placement Committee of Government Law College is one of the most
          important Committees of the College, shouldering the responsibility
          of providing a stepping stone to success to budding lawyers
          graduating from the College.
        </p>
        <p>
          The Committee aims at exhausting all possible opportunities of
          recruitment with law firms, counsels, LPOs and corporate houses. It
          acts as a link between the recruiters and the students, thereby
          fulfilling the needs of both, and enabling the students to get
          placements on campus. The members of the Placement Committee strive
          hard to ensure that maximum students from the college get placements,
          thus providing them with an opportunity to showcase their skills.
        </p>
        <p>
          The Annual On-Campus Recruitment Program 2012-2013 was a grand
          success, as the Placement Committee, true to its motto, succeeded in
          having more than 60 top law firms, counsel and corporate houses
          recruit our students.
        </p>
        <p>
          Since last year, the Placement Committee has been implementing the
          recruitment process throughout the year, thus functioning all year
          through. This academic year, apart from assisting in the recruitment
          process throughout the year, the Committee came up with
          two“PlacementWeeks”, one successfully conducted in September/October
          2012 and the second scheduled in February 2013. This widening of the
          scope of the activities of the Committee is sure to benefit both the
          students and the potential employers.
        </p>
        <p>
          The participation of a large number of students, lawyers, solicitors,
          law firms and corporate houses was a source of inspiration for all
          students who work zealously for the Committee, and will encourage
          them to undertake the Recruitment Program of the current academic
          year with even greater zeal and enthusiasm.
        </p>
        <p className="pt-10">Prof. H. D. Pithawalla</p>
      </div>
    </div>
  );
}

export default Chairman;
