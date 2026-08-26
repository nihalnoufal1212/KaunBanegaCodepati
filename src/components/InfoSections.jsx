export default function InfoSections() {
  return (
    <section className="kbcp-info">
      <div className="container kbcp-info__grid">

        {/* ABOUT */}

        <article id="about" className="kbcp-info-card">

          <div className="kbcp-info-card__heading">
            <span>01</span>
            <h2>ABOUT</h2>
          </div>

          <p className="kbcp-about__main">
            <strong>Kaun Banega CodePathi</strong> is a coding-focused
            competition organized by the{" "}
            <strong>ACM VIT-AP Student Chapter</strong>.
          </p>

          <p className="kbcp-about__text">
            Bringing the excitement of a quiz show into coding through
            fast-paced questions, strategic lifelines, audience
            participation, and the Hot Seat.
          </p>

        </article>


        {/* SCHEDULE */}

        <article id="schedule" className="kbcp-info-card">

          <div className="kbcp-info-card__heading">
            <span>02</span>
            <h2>SCHEDULE</h2>
          </div>

          <div className="kbcp-info-details">

            <div>
              <span>DATE</span>
              <strong>September 11 &amp; 12</strong>
            </div>

            <div>
              <span>VENUE</span>
              <strong>To Be Announced</strong>
            </div>

            <div>
              <span>ORGANIZED BY</span>
              <strong>ACM VIT-AP Student Chapter</strong>
            </div>

          </div>

          <div className="kbcp-info-prize">
            <span>GRAND PRIZE</span>
            <strong>₹5,000</strong>
          </div>

        </article>


        {/* CONTACT */}

        <article id="contact" className="kbcp-info-card">

          <div className="kbcp-info-card__heading">
            <span>03</span>
            <h2>CONTACT</h2>
          </div>

          <p className="kbcp-contact__intro">
            Connect with the official ACM VIT-AP Student Chapter.
          </p>

          <div className="kbcp-contact-links">

            <a
              href="mailto:acm.studentchapter@vitap.ac.in"
            >
              <span>EMAIL</span>
              <strong>
                acm.studentchapter@vitap.ac.in
              </strong>
              <b>↗</b>
            </a>

            <a
              href="https://acmvitap.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WEBSITE</span>
              <strong>acmvitap.in</strong>
              <b>↗</b>
            </a>

            <a
              href="https://www.linkedin.com/company/acm-student-chapter-vit-ap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LINKEDIN</span>
              <strong>ACM VIT-AP Student Chapter</strong>
              <b>↗</b>
            </a>

            <a
              href="https://www.instagram.com/acm_vitap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>INSTAGRAM</span>
              <strong>@acm_vitap</strong>
              <b>↗</b>
            </a>

          </div>

        </article>

      </div>
    </section>
  );
}