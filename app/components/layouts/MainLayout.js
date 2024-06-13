"use client";
import { Button } from "@/components/ui/button";
import NavBar from "./NavBar";
import Image from "next/image";
import heroPng from "../../../assets/undraw_compose_music_re_wpiw.svg";
import Link from "next/link";
import { FaGetPocket, FaPlus, FaRegArrowAltCircleRight } from "react-icons/fa";
import Maestro from "../../../assets/undraw_walk_in_the_city_re_039v.svg";
import { Card, CardContent } from "@/components/ui/card";
import { LuAlignVerticalDistributeStart, LuBinary } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import image4 from "../../../assets/4.png";

import explorer from "../../../assets/undraw_departing_re_mlq3.svg";

import { useRef } from "react";
import Footer from "./Footer";

const MainLayout = () => {
  const ref = useRef();
  const handleClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const imageArray = [
    {
      photo: image1,
      name: "Sumona Sen",
      stdType: "Beginner",
    },
    {
      photo: image2,
      name: "Priyanka Das",
      stdType: "Beginner",
    },
    {
      photo: image3,
      name: "Kajol Das",
      stdType: "Intermediate",
    },
    {
      photo: image4,
      name: "Ravi Kumar",
      stdType: "Advanced",
    },
  ];
  return (
    <div>
      <NavBar handleClick={handleClick} />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-16">
          <div className="container px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center md:text-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Discover the Enchanting Sounds of the Sitar
              </h1>
              <p className="max-w-md">
                Experience the rich cultural heritage and captivating melodies
                of the sitar under the guidance of our renowned teacher.
              </p>
              <div className="grid grid-cols-2 gap-4 md:flex lg:flex">
                <Button className="bg-blue-600 shadow">Join a Class</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={heroPng}
                width={450}
                height={450}
                alt="Sitar"
                className="max-w-[300px] md:max-w-full  animate-slide-in-right-to-left "
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-start lg:text-start">
            <div>
              <Image
                src={Maestro}
                width={500}
                height={500}
                alt="Sitar Teacher"
                className="rounded-xl animate-slide-in"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-rose-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Meet Your Sitar Maestro
              </h2>
              <p className="text-md">
                With over 20 years of experience, our sitar teacher is dedicated
                to sharing the rich cultural heritage and mesmerizing sounds of
                this ancient instrument. Through personalized lessons and a deep
                understanding of the sitar, he will guide you on a
                transformative musical journey.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                prefetch={false}
              >
                Learn More
                <FaRegArrowAltCircleRight className="w-4 h-4 fill-blue-600" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-start lg:text-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Explore Our Sitar Classes
              </h2>
              <p>
                Whether you{"'"}re a beginner or an experienced musician, our
                sitar classes cater to all skill levels. Immerse yourself in the
                rich traditions and techniques of this captivating instrument.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                prefetch={false}
              >
                View Classes
                <FaRegArrowAltCircleRight className="w-4 h-4 fill-blue-600" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-to-r from-slate-300 to-slate-500 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <LuAlignVerticalDistributeStart className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Beginner</h3>
                  <p className="text-center py-3">
                    Discover the fundamentals of sitar playing.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-teal-200 to-teal-500 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <LuBinary className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Intermediate</h3>
                  <p className=" py-3 text-center">
                    Enhance your skills and explore advanced techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className=" p-4 bg-gradient-to-r from-teal-300 to-yellow-200 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <FaPlus className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Advanced</h3>
                  <p className=" py-3 text-center">
                    Master the art of sitar performance.
                  </p>
                </CardContent>
              </Card>
              <Card className=" p-4 bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <FaGetPocket className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Private Lessons</h3>
                  <p className=" py-3 text-center">
                    Personalized instruction for your unique needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                What Our Students Say
              </h2>
              <p className=" max-w-md mx-auto">
                Hear from our satisfied students and discover the transformative
                power of learning the sitar.
              </p>
            </div>
            <div className="overflow-hidden">
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {imageArray.map((item, index) => {
                    return (
                      <CarouselItem
                        className="md:basis-1/2 lg:basis-1/2"
                        key={index}
                      >
                        <Card className="bg-gray-950 text-white p-6">
                          <CardContent>
                            <div className="flex items-center gap-4 mb-4">
                              <Image
                                src={item.photo}
                                alt=""
                                className="rounded-full h-10 w-10"
                              />
                              <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-400">
                                  {item.stdType} Student
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-400">
                              Learning the sitar with this teacher has been a\n
                              life-changing experience. His patience, expertise,
                              and\n passion for the instrument have truly
                              inspired me.
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-start">
            <div>
              <Image
                src={explorer}
                width={500}
                height={500}
                alt="Blog"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
                Explore Our Sitar Resources
              </h2>
              <p className="max-w-md">
                Dive into our collection of articles, tutorials, and videos to
                deepen your understanding of the sitar and its rich cultural
                heritage.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                prefetch={false}
              >
                Visit the Blog
                <FaRegArrowAltCircleRight className="w-4 h-4 fill-blue-600" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div ref={ref}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
