import { Check, Quote } from "lucide-react";
import coreFeatureImage from "@/assets/core-feature-image.jpg";

const CoreFeature = () => {
  const benefits = [
    "Reduce inventory costs by up to 30%",
    "Eliminate stockouts and overstock situations",
    "Automate 80% of routine inventory tasks",
    "Get real-time insights across all locations"
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            The future of inventory management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses who have transformed their operations with our intelligent platform.
          </p>
          
          <div className="inline-flex items-center px-4 py-2 bg-primary-light border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">
              Industry-leading technology
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight max-w-4xl mx-auto">
            "InvenFlow revolutionized how we manage our supply chain, giving us the visibility and control we never had before."
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={coreFeatureImage}
                alt="Advanced Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Advanced Analytics & Insights
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Make informed decisions with comprehensive analytics, demand forecasting, and performance metrics that give you complete visibility into your inventory operations.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
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