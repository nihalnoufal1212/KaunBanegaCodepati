export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">

        <div className="site-footer__main">
          <p className="site-footer__brand gold-text">
            KAUN BANEGA CODEPATHI
          </p>

          <p className="site-footer__tagline">
            KNOWLEDGE • STRATEGY • VICTORY
          </p>
        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__org">
          <span>
            Organized by
          </span>

          <strong>
            ACM VIT-AP Student Chapter
          </strong>

          <span>
            VIT-AP University
          </span>
        </div>

        <p className="site-footer__copyright">
          © 2026 ACM VIT-AP Student Chapter. All rights reserved.
        </p>

      </div>
    </footer>
  );
}