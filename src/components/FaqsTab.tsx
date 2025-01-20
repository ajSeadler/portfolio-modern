import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

const FaqsTab = () => {
  return (
    <Card>
      <CardBody>
        <h3 className="text-xl font-semibold text-violet-600 mb-4">FAQs</h3>
        <p>
          Curious about our services? Here are answers to some common questions.
        </p>
        <p className="mt-4">
          <strong>What industries do you serve?</strong> We cater to a wide
          range of sectors, including retail, healthcare, and tech startups.
        </p>
        <p className="mt-4">
          <strong>How do you ensure network security?</strong> By leveraging
          advanced technologies such as firewalls, threat detection systems, and
          encryption protocols, we provide robust security measures.
        </p>
        <p className="mt-4">
          <strong>What is the response time for support issues?</strong> We
          prioritize critical issues and typically respond within 30 minutes to
          ensure quick resolution.
        </p>
        <div className="mt-6">
          <Link href="/faqs">More FAQs</Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default FaqsTab;
