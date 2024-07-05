import { Button } from "../ui/button";

export const BagFooter = () => {
  return (
    <>
      <div>
        <Button className="w-full text-xs" variant="outline">
          XEM GIỎ HÀNG
        </Button>
      </div>
      <div>
        <Button className="w-full text-xs" variant="outline">
          THANH TOÁN
        </Button>
      </div>
    </>
  );
};
