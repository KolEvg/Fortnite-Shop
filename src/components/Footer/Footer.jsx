function Footer() {
  return (
    <footer className="page-footer blue lighten-4">
      <div className="footer-copyright">
        <div className="container">
          ©
          {' '}
          License Fortnite
          {' '}
          {new Date().getFullYear()}
          <a
            className="gray-text text-lighten-4 right"
            href="https://github.com/KolEvg/Fortnite-Shop"
            target="_blank"
            rel="noreferrer"
          >
            Repo

          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
