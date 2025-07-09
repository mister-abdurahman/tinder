import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import emailBanner from "@/assets/email-signup-banner.jpg";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="py-20" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container px-4">
        <div className="text-center space-y-6 mb-12">
          <p className="text-sm font-medium text-primary">
            GET STARTED TODAY
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to transform your inventory?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join over 5,000+ businesses who trust InvenFlow to manage their inventory operations.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={emailBanner}
            alt="Modern warehouse operations"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;