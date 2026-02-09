import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  BadgeCheck,
  ThumbsUp,
  MoveRight,
  Award,
  ShieldCheck,
  Rocket,
  PencilLine,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className=" py-20 w-full ">
      <div className="container mx-auto rounded-2xl bg-gradient-to-br from-[#5b5475] to-[#2d2743] p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Why Choose Opine Gallery
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </div>

            {/* Bottom Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <Feature
                icon={<ShieldCheck />}
                title="High Quality Products"
                text="Our artwork is made with the highest quality materials and printing process, ensuring that each piece lasts a lifetime."
              />
              <Feature
                icon={<Award />}
                title="Mindset Reminder"
                text="Our artwork is designed to serve as a daily reminder of the mindset required to achieve success."
              />
              <Feature
                icon={<Rocket />}
                title="Personalized Artwork"
                text="We offer artwork linked to key interests or communities that our customers are targeting."
              />
              <Feature
                icon={<PencilLine />}
                title="Bespoke Handmade Process"
                text="All of our products are handmade and independently quality assured prior to being sent out."
              />
            </div>

            {/* Gradient Button */}
            <div className="mt-12 text-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#EA62CC] to-[#651FFF] p-[2px] hover:scale-105 transition-transform">
                <Button
                  variant=""
                  className="rounded-lg font-bold text-white bg-gradient-to-br from-[#5b5475] to-[#2d2743] border-0 px-6"
                >
                  About Us{" "}
                  <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-[#DECFFF4D]/90 p-6 backdrop-blur ">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full ">
        {icon}
      </div>
      <div className="">
        <h3 className="font-semibold text-lg py-4 text-white">{title}</h3>
        <div className="flex">
          <div className="mr-4 h-8 w-1 inline-block bg-[#C622FF]"></div>
          <p className="text-sm text-gray-300">{text}</p>
        </div>
      </div>
    </div>
  );
}
