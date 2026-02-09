import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Faqs = () => {
  const items = [
    {
      value: "item-1",
      trigger: "How do I reset my password?",
      content:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
    {
      value: "item-2",
      trigger: "Can I change my subscription plan?",
      content:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
      value: "item-3",
      trigger: "What payment methods do you accept?",
      content:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#651FFF]">
            You Have Questions
          </h2>
          <h1 className="text-3xl md:text-3xl font-bold text-center my-6">
            We Have Answers
          </h1>
          <p className="text-center">
            Do not hesitate to send us an email if you have any questions.
          </p>
        </div>

        <div className="w-full mt-8">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="max-w-full"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="bg-[#DDCEFF]/30 mb-4 rounded-lg px-6 py-3"
              >
                <AccordionTrigger className="text-lg font-sembold">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Gradient Button */}
        <div className="mt-12 text-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-[#EA62CC] to-[#651FFF] p-[2px] hover:scale-105 transition-transform">
            <Button
              variant="outline"
              className="rounded-lg font-semibold border-0 px-6"
            >
              Visit FAQs{" "}
              <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
