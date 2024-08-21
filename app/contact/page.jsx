"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast"; // Import useToast

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 909-293-6474",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamedhamouda200212@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Los Angeles, CA",
  },
];

const Contact = () => {
  const form = useRef();
  const { toast } = useToast(); // Use the useToast hook

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    const formElements = form.current.elements;
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "service",
      "message",
    ];
    for (let field of requiredFields) {
      if (!formElements[field].value) {
        toast({
          title: <span className="text-red-500">Error</span>,
          description: `Please fill out the ${field
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()} field.`,
          variant: "destructive",
        });
        return;
      }
    }

    emailjs
      .sendForm(
        "service_70514ea", // replace with your EmailJS service ID
        "template_s8c1upi", // replace with your EmailJS template ID
        form.current,
        "pbji7I4LN702B4714" // replace with your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Success",
            description: "Message sent successfully!",
          });
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          toast({
            title: <span className="text-red-500">Error</span>,
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form} // Reference the form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail} // Handle form submission
            >
              <h3 className="text-4xl text-accent">Let's get to work!</h3>
              <p className="text-white/60">
                Fill out this form to get in touch with me. Alternatively, you can schedule a meeting through my Calendly using the button in the navigation bar. 
              </p>
              {/** input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First Name" />
                <Input type="text" name="lastName" placeholder="Last Name" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="text" name="phone" placeholder="Phone Number" />
              </div>
              {/** select */}
              <Select name="service">
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Full-time Job">Full-time Job</SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Mobile App Development">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="Machine Learning Model Development">
                      Machine Learning Model Development
                    </SelectItem>
                    <SelectItem value="Just a message">No service, just a message</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/** text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Your message here..."
                name="message"
              />
              {/** button */}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/** info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
