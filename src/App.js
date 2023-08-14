import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: ""
  });
  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [companyEmpty, setCompanyEmpty] = useState(false);

  const FormTitles = [
    "Contact details",
    "Our Services",
    "What's your project budget?",
    ""
  ];
  const FormDescription = [
    "Lorem ipsum dolor sit amet consectetur adipisc.",
    "Please select which service you are interested in.",
    "Please select the project budget range you have in mind.",
    ""
  ];

  if (formData.service === "") {
    setFormData({ ...formData, service: "Development" });
  }
  if (formData.budget === "") {
    setFormData({ ...formData, budget: "$50.000" });
  }

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <div className="contact-details">
          <div className="body">
            <div className="item-1">
              <input
                id="name"
                className={`text-edit-form icon-name ${
                  nameEmpty === false ? "" : "empty-field-text-edit"
                }`}
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
              <label
                id="label-name"
                className={`label-form ${
                  nameEmpty === false ? "" : "empty-field-label"
                }`}
                for="name"
              >
                Name
              </label>
              <label
                id="label-name-required"
                className={`label-form-required ${
                  nameEmpty === false ? "hidden" : ""
                }`}
              >
                Name is required
              </label>
            </div>

            <div className="item-2">
              <input
                id="email"
                className={`text-edit-form icon-email ${
                  emailEmpty === false ? "" : "empty-field-text-edit"
                }`}
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
              <label
                id="label-email"
                for="email"
                className={`label-form ${
                  emailEmpty === false ? "" : "empty-field-label"
                }`}
              >
                Email
              </label>
              <label
                id="label-email-required"
                className={`label-form-required ${
                  emailEmpty === false ? "hidden" : ""
                }`}
              >
                Email is required
              </label>
            </div>

            <div className="item-3">
              <input
                id="phone"
                className={`text-edit-form icon-phone ${
                  phoneEmpty === false ? "" : "empty-field-text-edit"
                }`}
                type="text"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              />{" "}
              <label
                id="label-phone"
                for="phone"
                className={`label-form ${
                  phoneEmpty === false ? "" : "empty-field-label"
                }`}
              >
                Phone Number
              </label>{" "}
              <label
                id="label-phone-required"
                className={`label-form-required ${
                  phoneEmpty === false ? "hidden" : ""
                }`}
              >
                Phone is required
              </label>
            </div>

            <div className="item-4">
              <input
                id="company"
                className={`text-edit-form icon-company ${
                  companyEmpty === false ? "" : "empty-field-text-edit"
                }`}
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(event) =>
                  setFormData({ ...formData, company: event.target.value })
                }
              />{" "}
              <label
                id="label-company"
                className={`label-form ${
                  companyEmpty === false ? "" : "empty-field-label"
                }`}
              >
                Company
              </label>{" "}
              <label
                id="label-company-required"
                className={`label-form-required ${
                  companyEmpty === false ? "hidden" : ""
                }`}
              >
                Company is required
              </label>
            </div>
          </div>
        </div>
      );
    } else if (page === 1) {
      return (
        <div className="our-services">
          <div className="body">
            <div className="item-1">
              <label className="radio-box">
                <input
                  type="radio"
                  name="service"
                  class="card-input-element"
                  value="Development"
                  checked={formData.service === "Development"}
                  onChange={(event) =>
                    setFormData({ ...formData, service: event.target.value })
                  }
                />
                <div className="card-input">
                  <div className="card-icon">
                    <img
                      className="img-icon"
                      src="development.png"
                      alt="development"
                    />
                  </div>
                  <div className="card-text">Development</div>
                </div>
              </label>
            </div>

            <div className="item-2">
              <label className="radio-box">
                <input
                  type="radio"
                  name="service"
                  class="card-input-element"
                  value="Web Design"
                  checked={formData.service === "Web Design"}
                  onChange={(event) =>
                    setFormData({ ...formData, service: event.target.value })
                  }
                />
                <div className="card-input">
                  <div className="card-icon">
                    <img className="img-icon" src="web.png" alt="web" />
                  </div>
                  <div className="card-text">Web Design</div>
                </div>
              </label>
            </div>

            <div className="item-3">
              <label className="radio-box">
                <input
                  type="radio"
                  name="service"
                  class="card-input-element"
                  checked={formData.service === "Marketing"}
                  value="Marketing"
                  onChange={(event) =>
                    setFormData({ ...formData, service: event.target.value })
                  }
                />
                <div className="card-input">
                  <div className="card-icon">
                    <img
                      className="img-icon"
                      src="marketing.png"
                      alt="marketing"
                    />
                  </div>
                  <div className="card-text">Marketing</div>
                </div>
              </label>
            </div>

            <div className="item-4">
              <label className="radio-box">
                <input
                  type="radio"
                  name="service"
                  class="card-input-element"
                  value="Other"
                  checked={formData.service === "Other"}
                  onChange={(event) =>
                    setFormData({ ...formData, service: event.target.value })
                  }
                />
                <div className="card-input">
                  <div className="card-icon">
                    <img className="img-icon" src="other.png" alt="other" />
                  </div>
                  <div className="card-text">Other</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      );
    } else if (page === 2) {
      return (
        <div className="budget">
          <div className="body">
            <div className="item-1">
              <label className="radio-box">
                <input
                  type="radio"
                  name="budget"
                  class="card-input-element-2"
                  value="$5.000-$10.000"
                  checked={formData.budget === "$5.000-$10.000"}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                />
                <div className="card-input-2">
                  <img
                    className="check-icon"
                    src={
                      formData.budget === "$5.000-$10.000"
                        ? "checked.png"
                        : "unchecked.png"
                    }
                    alt="other"
                  />
                  <div className="card-text">$5.000-$10.000</div>
                </div>
              </label>
            </div>

            <div className="item-2">
              <label className="radio-box">
                <input
                  type="radio"
                  name="budget"
                  class="card-input-element-2"
                  value="$10.000-$20.000"
                  checked={formData.budget === "$10.000-$20.000"}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                />
                <div className="card-input-2">
                  <img
                    className="check-icon"
                    src={
                      formData.budget === "$10.000-$20.000"
                        ? "checked.png"
                        : "unchecked.png"
                    }
                    alt="other"
                  />
                  <div className="card-text">$10.000-$20.000</div>
                </div>
              </label>
            </div>

            <div className="item-3">
              <label className="radio-box">
                <input
                  type="radio"
                  name="budget"
                  class="card-input-element-2"
                  value="$20.000-$50.000"
                  checked={formData.budget === "$20.000-$50.000"}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                />
                <div className="card-input-2">
                  <img
                    className="check-icon"
                    src={
                      formData.budget === "$20.000-$50.000"
                        ? "checked.png"
                        : "unchecked.png"
                    }
                    alt="other"
                  />
                  <div className="card-text">$20.000-$50.000</div>
                </div>
              </label>
            </div>

            <div className="item-4">
              <label className="radio-box">
                <input
                  type="radio"
                  name="budget"
                  class="card-input-element-2"
                  value="$50.000"
                  checked={formData.budget === "$50.000"}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                />
                <div className="card-input-2">
                  <img
                    className="check-icon"
                    src={
                      formData.budget === "$50.000"
                        ? "checked.png"
                        : "unchecked.png"
                    }
                    alt="other"
                  />
                  <div className="card-text">$50.000 +</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      );
    } else if (page === 3) {
      return (
        <div className="complete">
          <img className="complete-icon" src="complete.png" alt="complete" />{" "}
          <h3>Submit your quote request</h3>
          <h2>
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </h2>
          <div className="submit">
            <button
              className="button-submit"
              onClick={() => {
                const myJSON = JSON.stringify(formData);
                alert(myJSON);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Get a project quote</h1>
      <div className="instruksi">
        <h2>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </h2>
      </div>
      <div className="card">
        <div className="form-container">
          <div className="progress-bar">
            <img src={`bar-${page + 1}.png`} alt="progress bar" />
          </div>
          <div className="garis"></div>
          <div className="header">{FormTitles[page]}</div>
          <div className="instruksi-form">{FormDescription[page]}</div>
          {PageDisplay()}
        </div>
      </div>

      <div className="footer">
        <button
          className={`button-prev ${page === 0 ? "hidden" : ""}`}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Previous step
        </button>
        <button
          className={`button-next ${
            page === FormTitles.length - 1 ? "hidden" : ""
          }`}
          onClick={() => {
            if (page === 0) {
              let anyEmptyField = false;
              if (formData.name.trim() === "") {
                setNameEmpty(true);
                document.getElementById("name").focus();
                anyEmptyField = true;
              } else {
                setNameEmpty(false);
              }
              if (formData.email.trim() === "") {
                setEmailEmpty(true);
                document.getElementById("email").focus();
                anyEmptyField = true;
              } else {
                setEmailEmpty(false);
              }
              if (formData.phone.trim() === "") {
                setPhoneEmpty(true);
                document.getElementById("phone").focus();
                anyEmptyField = true;
              } else {
                setPhoneEmpty(false);
              }
              if (formData.company.trim() === "") {
                setCompanyEmpty(true);
                document.getElementById("company").focus();
                anyEmptyField = true;
              } else {
                setCompanyEmpty(false);
              }

              if (anyEmptyField === true) {
                return;
              } else {
                setPage((currPage) => currPage + 1);
              }
            }

            if (page === 1) {
              setPage((currPage) => currPage + 1);
            }
            if (page === 2) {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next step"}
        </button>
      </div>
    </div>
  );
}
