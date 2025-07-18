import { Check } from "lucide-react";
import mobileImage from "@/assets/join_early_card.png";
import TinyCard from "./TinyCard";

const MobileFeatures = () => {
  const mobileFeatures = [
    "Early access before public launch",
    "Lifetime discount — you’ll never pay full price",
    "Your feedback → our product roadmap",
    "We’ll feature your store on launch",
  ];

  return (
    <section className="sm:py-20 py-12 bg-[#F8FAFC]">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <TinyCard text="Launching Soon" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why Join Early?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Tincidunt arcu non sodales neque sodales ut etiam sit. Aliquet
                sagittis id consectetur purus ut faucibus. Aliquam id diam
                maecenas ultricies mi eget mauris pharetra et.
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
            <div className="overflow-hidden">
              <img
                src={mobileImage}
                alt="Mobile inventory management app"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;
