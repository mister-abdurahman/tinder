import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import emailBanner from "@/assets/tinder_mobiles.png";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="sm:py-20 py-10 bg-gradient-to-b from-[#E4D7FF] from-2% to-[#FFFFFF] to-80%">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-12">
          <p className="text-sm font-medium text-primary bg-white px-2 py-1 rounded-full w-fit mx-auto">
            We know your pain point, here is the Solution
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Built by Sellers, for Sellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’ve been in your shoes — flipping products, managing orders across
            apps, and struggling with half-solutions. This is the tool we wish
            we had
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border-gray-300 "
              required
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 whitespace-nowrap rounded-full"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={emailBanner}
            alt="Modern warehouse operations"
            className="w-3/4 aspect-video object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
