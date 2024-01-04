import "./Contact.css";
export const Contact = () => {
  return (
    <>
      <div className="contactUs">
        <div className="pageHeader">
          <div className="headerText">
            <h2>Contact us</h2>
            <p>Get the latest news, updates and tips</p>
          </div>
        </div>
        <div className="ContactHeroSection">
          <h3 className="contactUsText">Contact us</h3>
          <h2 className="getInTouch">Get in touch</h2>
          <p>
            The right move at the right time saves your investment. live the
            dream of expanding your business.
          </p>
        </div>
        <div className="contatUsPageForm">
          <form action="">
            <span className="contatFromFlex">
              <input type="text" name="name" placeholder="Type name" />
              <input
                type="text"
                name="company"
                placeholder="Type your company name(optional)"
              />
            </span>
            <span className="contatFromFlex">
              <input type="text" name="email" placeholder="Type Eamil" />
              <input
                type="text"
                name="phone"
                placeholder="Type your phone number"
              />
            </span>
            <span className="textArea">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
