import ImageLogo from "@/components/ImageLogo";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className={cn("fl-col-center gap-4 ")}>
      <ImageLogo />
      <div className="fl-col-center ">
        <h1 className="title">
          Mugishop <span className="text-muted-foreground">&#8506;</span>
        </h1>
        <p className="muted-text">Shoppy!</p>
      </div>
    </div>
  );
};
