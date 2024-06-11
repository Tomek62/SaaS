const Footer = () => {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <form>
        <h6 className="footer-title">FoodPoint</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Contactez nous directement ici.</span>
          </label>
          <textarea
            placeholder="Laissez nous un message"
            className="textarea textarea-bordered textarea-md mb-5 w-full max-w-xs resize-none"
          ></textarea>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input join-item input-bordered"
            />
            <button className="btn btn-primary join-item">Send</button>
          </div>
        </fieldset>
      </form>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link-hover link">Création de site</a>
        <a className="link-hover link">Click&Collect</a>
        <a className="link-hover link">Service de livraison</a>
        <a className="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">Jobs</a>
        <a className="link-hover link">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
    </footer>
  );
};
export default Footer;
