import { Check } from "lucide-react";
import mobileImage from "@/assets/mobile-features.jpg";

const MobileFeatures = () => {
  const mobileFeatures = [
    "Scan barcodes and QR codes instantly",
    "Update inventory levels on-the-go",
    "Receive real-time alerts and notifications",
    "Access reports and analytics anywhere",
    "Offline mode for uninterrupted work"
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary">
                MOBILE FIRST APPROACH
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Manage inventory from anywhere
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mobile app gives your team the power to update inventory, scan items, and access critical data whether they're in the warehouse, on the shop floor, or in the field.
              </p>
            </div>

            <div className="space-y-3">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={mobileImage}
                alt="Mobile inventory management app"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;