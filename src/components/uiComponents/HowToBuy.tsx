import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Choose Your Artwork And Frame",
    desc: "Browse our curated selection and select your preferred artwork and frame options.",
    image: "/images/Buy2.png",
    align: "left",
  },
  {
    id: 2,
    title: "Enter Your Delivery And Payment Details",
    desc: "Once you've made your selection, simply fill in your delivery address and payment information.",
    image: "/images/Buy1.png",
    align: "right",
  },
  {
    id: 3,
    title: "Receive Your Order",
    desc: "Your artwork is carefully packed and delivered to you safely and on time.",
    image: "/images/Buy.png",
    align: "left",
  },
]

export default function HowToBuy() {
  return (
    <section className=" py-20">
      <div className="container mx-auto rounded-3xl bg-gradient-to-br from-[#EAD9FF] to-[#D7C1FF] px-6 py-16 backdrop-blur-md md:px-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">How To Buy</h2>
          <p className="mt-2 text-lg text-gray-600">
            You're only over 3 steps away from your artwork of choice
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-purple-400 md:block" />

          <div className="space-y-20">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative grid items-center gap-10 md:grid-cols-2 ${
                  step.align === "right" ? "md:text-right" : ""
                }`}
              >
                {/* Left content */}
                {step.align === "left" && (
                  <StepContent step={step} align="left" />
                )}

                {/* Step number */}
                <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-600 bg-white text-sm font-bold text-purple-600">
                    {step.id}
                  </div>
                </div>

                {/* Right content */}
                {step.align === "right" && (
                  <StepContent step={step} align="right" />
                )}

                {/* Mobile number */}
                <div className="flex justify-center md:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-600 bg-white text-sm font-bold text-purple-600">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button className="rounded-lg bg-black px-8! py-6 cursor-pointer text-white hover:bg-black/90">
            Shop Now <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
          </Button>
        </div>
      </div>
    </section>
  )
}

type StepProps = {
  step: {
    title: string
    desc: string
    image: string
  }
  align: "left" | "right"
}

function StepContent({ step, align }: StepProps) {
  return (
    <>
      {/* Text */}
      <div className={`max-w-sm text-start mx-auto ${align === "left" ? "md:order-2" : ""}`}>
        <h3 className="text-3xl font-semibold text-gray-900">
          {step.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
      </div>

      {/* Image */}
      <div
        className={`flex justify-center ${
          align === "right" ? "md:order-1" : ""
        }`}
      >
        <img
          src={step.image}
          alt={step.title}
          className="h-50 w-60 object-contain"
        />
      </div>
    </>
  )
}
