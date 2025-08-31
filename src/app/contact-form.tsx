"use client";

import {
  Typography,
  Card,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const handleContactClick = () => {
    window.location.href = "mailto:rohanshr135@outlook.com?subject=Portfolio Inquiry&body=Hi Rohan,%0D%0A%0D%0AI am reaching out regarding...";
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="text-center py-16 px-8">
            <div className="w-full max-w-md mx-auto">
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Let&apos;s Connect
              </Typography>
              <Typography
                variant="lead"
                className="mb-8 text-base !text-gray-500"
              >
                I&apos;m always interested in new opportunities and collaborations. Click the button below to send me an email!
              </Typography>
              
              <Button 
                className="mb-8 flex items-center gap-3 mx-auto" 
                color="gray" 
                size="lg"
                onClick={handleContactClick}
              >
                <EnvelopeIcon className="h-5 w-5" />
                Contact Me
              </Button>
              
              <div className="flex items-center justify-center gap-5">
                <a href="https://www.linkedin.com/in/rohanshr135" target="_blank" rel="noopener noreferrer">
                  <IconButton variant="text" color="gray">
                    <i className="fa-brands fa-linkedin text-lg" />
                  </IconButton>
                </a>
                <a href="https://github.com/rohanshr135" target="_blank" rel="noopener noreferrer">
                  <IconButton variant="text" color="gray">
                    <i className="fa-brands fa-github text-lg" />
                  </IconButton>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
