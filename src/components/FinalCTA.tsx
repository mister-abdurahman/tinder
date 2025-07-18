import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final CTA email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="sm:py-20 py-12 bg-[#EEF2FF] text-black">
      <div className="container px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            No more back-and-forth. Just your store, your rules.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            JJoin the waitlist today and be the first to launch your store,
            manage inventory, and track sales — all in one place
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
              className="flex-1 bg-white text-foreground placeholder:text-muted-foreground rounded-full border-gray-400"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-primary text-white hover:bg-primary/90 whitespace-nowrap rounded-full"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="text-sm text-primary-foreground/60">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
