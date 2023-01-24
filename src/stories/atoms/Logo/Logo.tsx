import Image from "next/image";

type ImageProps = {
  width: number;
  height: number;
  source: string;
  alt: string;
};
export default function Logo({ source, alt, width, height }: ImageProps) {
  return (
    <Image
      src={source}
      alt="Agency logo"
      width={width}
      height={height}
      placeholder="blur"
    />
  );
}
