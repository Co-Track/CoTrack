import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <>
      <div className="faq_area section_padding_130" id="faq">
        <h3>
          <span> FAQ </span>
        </h3>
        <p>
          Welcome to CoTrack's FAQ section, designed to provide clarity and
          assistance as you navigate our family expense tracking app. Below,
          you'll find answers to commonly asked questions to help you make the
          most of our user-friendly platform. If you have any specific inquiries
          not covered here, feel free to reach out to our support team for
          personalized assistance. Let's embark on a seamless journey to
          efficient family financial management together!
        </p>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div
                className="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Update the container class to use 'container-fluid' */}
            <div className="col-12 col-sm-10 col-lg-8">
              <div className="accordion faq-accordian" id="faqAccordion">
                {/* Question 1 */}
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="card-header" id="headingOne">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the purpose of this expense tracker app?{" "}
                      <span className="lni-chevron-up"></span>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        The expense tracker app helps you keep track of your
                        personal, living, and emergency expenses. It provides a
                        convenient way to monitor your spending, categorize
                        expenses, and maintain a budget.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Question 2 */}
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-header" id="headingTwo">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      How do I add an expense in the app?{" "}
                      <span className="lni-chevron-up"></span>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        To add an expense, navigate to the "Add Expense" section
                        and enter the necessary details such as the amount,
                        category, and the date. Click the "Add" button to record
                        the expense.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="card-header" id="headingThree">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Can I use the app on multiple devices?{" "}
                      <span className="lni-chevron-up"></span>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        Yes, the app supports multiple devices. Simply log in
                        with your account credentials, and your expense data
                        will be synced across all your devices.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Button */}
              <div
                className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                data-wow-delay="0.5s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
