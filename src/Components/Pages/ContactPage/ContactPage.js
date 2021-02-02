import React, { Component } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";

import {
  Card,
  CardContent,
  TextField,
  Typography,
  FormGroup,
} from "@material-ui/core";

import * as Yup from "yup";
import classes from "./ContactPage.module.css";
import Button from "react-bootstrap/Button";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(Form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  render() {
    const status = this.state.status;
    return (
      <div id="ContactPage">
        <Card raised className={classes.ContactUsForm}>
          <CardContent className="text-center">
            <Typography variant="h4" className="pb-4">Contact Me</Typography>

            {/* Contact Form */}
            <Formik
              initialValues={{
                name: "",
                email: "",
                msgBox: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(2, "The name entered must be at least 2 characters long, please try again!")
                  .max(20, "The name entered must be 20 characters or less, please try again!")
                  .required("Required")
                  .matches(
                    /^[a-zA-Z ]+$/,
                    "The name entered must only contain letters A-z and space, please try again!"
                  ),
                email: Yup.string()
                  .email("Invalid Email address! Please try again.")
                  .required("Required"),
                msgBox: Yup.string()
                  .min(
                    2,
                    "Message is too short, the message must be at least 2 characters long. Please try again!"
                  )
                  .max(500, "Reached maximum message length!")
                  .required("Required"),
              })}
            >
              {({ isValid, dirty, isSubmitting, resetForm }) => (
                <Form
                  id="contactForm"
                  action="https://formspree.io/f/xbjpbdvb"
                  method="POST"
                  onSubmit={this.handleSubmit}
                >
                  {/* Name field  */}
                  <FormGroup>
                    <Field
                      name="name"
                      variant="outlined"
                      as={TextField}
                      label="Name"
                      focused
                      className={classes.FieldSpace}
                    />
                    <ErrorMessage name="name">
                      {(msg) => <p className={classes.ErrorMsg}>{msg}</p>}
                    </ErrorMessage>
                  </FormGroup>

                  {/* Email field  */}
                  <FormGroup className={classes.FieldSpace}>
                    <Field
                      name="email"
                      variant="outlined"
                      as={TextField}
                      type="email"
                      label="Email"
                    />
                    <ErrorMessage name="email">
                      {(msg) => <p className={classes.ErrorMsg}>{msg}</p>}
                    </ErrorMessage>
                  </FormGroup>

                  {/* MessageBox field  */}
                  <FormGroup className={classes.FieldSpace}>
                    <Field
                      name="msgBox"
                      as="textarea"
                      placeholder="Enter message here"
                      multiline="true"
                      rows={4}
                      className="border-2"
                    />
                    <ErrorMessage name="msgBox">
                      {(msg) => <p className={classes.ErrorMsg}>{msg}</p>}
                    </ErrorMessage>
                  </FormGroup>

                  {/* Form Button */}
                  {status === "SUCCESS" ? (
                    <p>The Message went successfully sent!</p>
                  ) : (
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!isValid || !dirty}
                    >
                      {isSubmitting ? "Loading..." : "Send"}
                    </Button>
                  )}
                  {status === "ERROR" && (
                    <p>Error, the message was not sent. Please try again!</p>
                  )}
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ContactPage;
