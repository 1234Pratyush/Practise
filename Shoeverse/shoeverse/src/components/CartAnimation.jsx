import { useRive } from "@rive-app/react-canvas";

const CartAnimation = () => {
  const { RiveComponent } = useRive({
    src: "/14354-27034-a-girl-carrying-a-shopping-trolley.riv",
    autoplay: true,
  });

  return (
    <div className="w-80 h-80">
      <RiveComponent />
    </div>
  );
};

export default CartAnimation;
