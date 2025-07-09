import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import dashboardImage from "@/assets/dashboardHero.png";
import TinyCard from "./TinyCard";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="pt-6 lg:pt-8">
      <div className="sm:px-0 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 sm:pl-12 pl-4">
            <div className="space-y-4">
              <TinyCard text="Launching Soon" />
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                From <span className="text-primary"> Side Hustle</span> to{" "}
                <span className="text-primary"> Serious Sales </span> — All in
                One Place
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Launch your own online shop in minutes — manage products, sales,
                inventory, and deliveries, all in one place.
              </p>
            </div>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 whitespace-nowrap rounded-full"
              >
                Join the waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>I hereby agree to data privacy policy.</span>
              {/* <span>30-day free trial • No credit card required</span> */}
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative">
            {/* <div className="relative overflow-hidden shadow-2xl"> */}
            <img
              src={dashboardImage}
              alt="InvenFlow Dashboard"
              className="w-full h-auto object-contain"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
