import { Check, CircleCheck, Quote } from "lucide-react";
import coreFeatureImage from "@/assets/tinder_feature_frame.png";

const CoreFeature = () => {
  const benefits = [
    "Solo vendors & creators",
    "Boutique brands & DTC stores",
    "Retail teams & growing enterprises",
    "Artisans, tailors & makers",
    "Warehouses managing 100+ SKUs",
    "Resellers & inventory-heavy shops",
  ];

  return (
    <section className="sm:py-20 py-12">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why We're Building This
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We know what it’s like to run a small hustle with big dreams — DMs,
            spreadsheets, and endless “is it still available?” messages
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-primary-light border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">
              So we’re building the tool we wish we had:
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight max-w-4xl mx-auto">
            "✨ A clean, affordable, no-fluff platform that helps you sell
            better and look professional — without needing a tech team."
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative w-full h-full">
            <img
              src={coreFeatureImage}
              alt="Advanced Analytics Dashboard"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Designed For Sellers of Every Size
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're just starting out or already running a
                fast-moving business, our platform scales with you.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CircleCheck className="h-7 w-7 text-white fill-primary " />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeature;
