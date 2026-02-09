import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MoveRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="container mx-auto rounded-3xl bg-gradient-to-br from-[#2b2440] via-[#3b3356] to-[#1f1a2e] p-6 md:p-10 text-white shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Get <br /> In Touch
                </h2>
              </div>

              <div className="space-y-5 text-sm text-white/80">
                <div className="gap-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 text-purple-300" />{" "}
                    <h4 className="font-semibold">Location</h4>
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="mr-4 ml-2 h-5 w-px inline-block bg-[#C622FF]"></div>
                    <div>
                      <p className="text-xs text-gray-400">
                        Koekoekstraat 55 <br />
                        Utrecht
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gap-3">
                  <div className="flex items-start gap-2">
                    <Phone className="mt-1 h-4 w-4 text-purple-300" />{" "}
                    <h4 className="font-semibold">Phone Number</h4>
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="mr-4 ml-2 h-5 w-px inline-block bg-[#C622FF]"></div>
                    <div>
                      <p className="text-xs text-gray-400">+31 6 12345678</p>
                    </div>
                  </div>
                </div>

                <div className="gap-3">
                  <div className="flex items-start gap-2">
                    <Mail className="mt-1 h-4 w-4 text-purple-300" />{" "}
                    <h4 className="font-semibold">Email Address</h4>
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="mr-4 ml-2 h-5 w-px inline-block bg-[#C622FF]"></div>
                    <div>
                      <p className="text-xs text-gray-400">
                        info@yourcompany.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="flex gap-3 mb-0">
                  <div className="flex items-start gap-2">
                    <Mail className="mt-1 h-4 w-4 text-purple-300" />{" "}
                    <h4 className="font-semibold">Social Links</h4>
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-2">
                  <div className="mr-4 ml-2 h-5 w-px inline-block bg-[#C622FF]"></div>
                  {[Facebook, Twitter, Instagram, Linkedin].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#B71FFF] to-[#651FFF] text-purple-200 transition hover:bg-purple-600 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
              <form className="space-y-4">
                <p className="mb-4 font-semibold text-white/70">
                  Please enter your details
                </p>

                <Input
                  placeholder="Full Name"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50"
                />

                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50"
                />

                <Input
                  placeholder="Company Name"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50"
                />

                <Textarea
                  placeholder="Tell us a bit about how we can help you"
                  className="min-h-[120px] bg-white/10 border-white/10 text-white placeholder:text-white/50"
                />

                <div className="mt-6 ">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#EA62CC] to-[#651FFF] p-[2px] hover:scale-105 transition-transform">
                <Button
                  variant=""
                  className="rounded-lg font-bold text-white bg-gradient-to-br from-[#5b5475] to-[#2d2743] border-0 px-6"
                >
                 Submit Your Query
                  <MoveRight className="ml-2 inline-block text-[#bf95d3]" />
                </Button>
              </div>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
