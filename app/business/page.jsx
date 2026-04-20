import BusinessClient from "./BusinessClient";

export const metadata = {
  title: "For Business — HP Volume Pricing, AMC & GeM Tenders",
  description: "HP World's dedicated B2B desk for Kerala — volume pricing, GST invoicing, on-site installation, AMC contracts and GeM tender support. Serving IT parks, healthcare, education and government.",
  alternates: { canonical: "/business" },
};

export default function Page() {
  return <BusinessClient />;
}
