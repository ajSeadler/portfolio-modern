import { Card, CardBody } from "@heroui/card";

const FaqsTab = () => {
  return (
    <Card>
      <CardBody>
        <h3 className="text-xl font-semibold text-violet-600 mb-4">
          Skate Media
        </h3>
        <p>Check out some of the latest skate moments captured in action.</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <img
            src="/pictures/skate-1-min.png"
            alt="Skate action 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/pictures/skate-1.2-min.png"
            alt="Skate action 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="/pictures/skate-1.3-min.png"
            alt="Skate action 3"
            className="rounded-lg shadow-md"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FaqsTab;
