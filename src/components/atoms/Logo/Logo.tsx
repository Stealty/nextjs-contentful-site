import Image from "next/image";

type ImageProps = {
  width: number;
  height: number;
};
export default function Logo({ width, height }: ImageProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Agency logo"
      width={width}
      height={height}
    />
  );
}
