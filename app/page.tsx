import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">HomeAway Project - Starter</h1>;
      <Button
        variant="outline"
        size="lg"
        className="uppercase m-8 text-blue-600"
      >
        click me
      </Button>
    </div>
  );
};
export default HomePage;
