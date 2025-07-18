import featureIcons from "@/assets/feature-icons.png";
import TinyCard from "./TinyCard";
import link from "@/assets/link.png";
import bag from "@/assets/bag.png";
import truck from "@/assets/truck.png";
import settings from "@/assets/settings.png";
import graph from "@/assets/graph.png";
import box from "@/assets/box.png";

const Features = () => {
  const features = [
    {
      image: link,
      title: "Your own shareable storefront URL",
      description:
        "Give your hustle a home. Instantly get a branded link you can drop in bios, chats, and DMs — no tech setup required.",
    },
    {
      image: bag,
      title: "Add & manage unlimited products",
      description:
        "Upload once, edit anytime. Showcase all your products without limits — whether you're selling one item or a hundred.",
    },
    {
      image: box,
      title: "Live inventory tracking",
      description:
        "Know what’s in stock, what’s running low, and what’s selling fast — no more manual counting or “oops, we’re out.”",
    },
    {
      image: graph,
      title: "Simple finance and sales dashboard",
      description:
        "Get the insights you need to grow. View your revenue, order trends, and product performance at a glance.",
    },
    {
      image: truck,
      title: "Choose your delivery company",
      description:
        "Pick from trusted logistics partners or add your own.Fulfill orders without the back-and-forth.",
    },
    {
      image: settings,
      title:
        "Designed for mobile-first — because that’s where your customers live",
      description:
        "Built for the way you work — on the go. Your dashboard and store look perfect on any phone, anytime.",
    },
  ];

  return (
    <section className="sm:py-20 py-12 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center">
            <TinyCard text="Features" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            What You’re Getting (No Fluff)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon placeholder - In a real implementation, you'd use individual icons */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={`${feature.title}-icon image`}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
