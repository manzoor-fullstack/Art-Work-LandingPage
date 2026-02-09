import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, BadgeCheck, ThumbsUp, MoveRight, Award } from "lucide-react";

export default function PrintingProcess() {
  return (
    <section className="container mx-auto w-full rounded-2xl bg-gradient-to-br from-[#5b5475] to-[#2d2743] p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Printing<br />Process</h2>

          <p className="mt-4 text-sm text-white/80 max-w-md">
            Innovation is the key inspiration of our work. Visionaries invoke wonder, motivation and spirit.
            We aspire to replicate these emotions through our art.
          </p>

          <p className="mt-3 text-sm text-white/70 max-w-md">
            Diversity of opinion is at the heart of the Open community. We support freedom of thought and
            expression through art.
          </p>

          <p className="mt-3 text-sm text-white/70 max-w-md">
            Quality is important to us. That’s why we only work with independently quality assured printing
            professionals and provide a certificate of authentication and paper warranty with every purchase.
          </p>

          {/* Gradient Button */}
          <div className="mt-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-[#EA62CC] to-[#651FFF] p-[2px] hover:scale-105 transition-transform">
            <Button
              variant=""
              className="rounded-lg text-white bg-gradient-to-br from-[#5b5475] to-[#2d2743] border-0 px-6"
            >
              Our Printing Process <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
            </Button>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex justify-center">
            <div className="rounded-[2rem] h-[360px] w-[290px] top-0 absolute rotate-10 bg-purple-600/20 "></div>
          <div className="rounded-[2rem]">
            <img
              src="/images/img_About_02.jpg"
              alt="Artwork"
              className="h-[350px] w-full rounded-[1.5rem] object-cover relative"
            />
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={<Truck />}
          title="Free UK Shipping"
          text="Shipped anywhere in the UK within 7 days for free."
        />
        <Feature
          icon={<Award />}
          title="Certificate"
          text="Proof of ownership with 100-year paper warranty included."
        />
        <Feature
          icon={<ThumbsUp />}
          title="Quality Assurance"
          text="All prints are subject to quality control. 14-day money-back guarantee."
        />
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
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 700">
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
