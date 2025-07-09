import featureIcons from "@/assets/feature-icons.png";
import TinyCard from "./TinyCard";

const Features = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description:
        "Monitor inventory levels across all locations with live updates and automated alerts.",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Leverage machine learning to predict demand patterns and optimize stock levels.",
    },
    {
      title: "Smart Automation",
      description:
        "Automate reordering, alerts, and workflows to reduce manual tasks and errors.",
    },
    {
      title: "Mobile Access",
      description:
        "Manage inventory on-the-go with our mobile app and barcode scanning features.",
    },
    {
      title: "Team Collaboration",
      description:
        "Enable seamless communication between warehouse staff, managers, and suppliers.",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade security with role-based access controls and audit trails.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
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
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded"></div>
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
