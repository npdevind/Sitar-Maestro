import { GiGuitarHead } from "react-icons/gi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Label } from "@radix-ui/react-label";

import { Textarea } from "@/components/ui/textarea";

import { IoMdLocate } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 text-white py-8 px-4 md:px-6">
        <div className="md:py-10 px-10 md:px-10 max-md:mb-5">
          <div className="grid md:grid-cols-2 gap-28">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Get in touch</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Get in touch with us using the information below.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <IoMdLocate className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">Sitar Maestro</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      123 Main St, Anytown USA 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">+1 (555) 555-5555</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Monday - Friday, 9am - 5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdMail className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">support@acme.com</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get in touch with our support team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-b-2 border-white mb-4"></div>

        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GiGuitarHead className="w-6 h-6" />
            <span className="text-lg font-semibold">Sitar Maestro</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Classes
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              prefetch={false}
            >
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              prefetch={false}
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              prefetch={false}
            >
              <FaSquareXTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white"
              prefetch={false}
            >
              <FaYoutube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
