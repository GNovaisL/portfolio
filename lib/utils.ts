import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useMediaQuery } from "react-responsive";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopS: "1080px",
  laptopM: "1260px",
  laptopL: "1440px",
  laptopXL: "1536px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  laptopXL: `(max-width: ${size.laptopXL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const VerifyScreenSize = () => {
  const isTablet = useMediaQuery({ query: device.tablet });
  const isMobileS = useMediaQuery({ query: device.mobileS });
  const isMobileM = useMediaQuery({ query: device.mobileM });
  const isMobileL = useMediaQuery({ query: device.mobileL });
  const isLaptop = useMediaQuery({ query: device.laptop });
  const isLaptopS = useMediaQuery({ query: device.laptopS });
  const isLaptopL = useMediaQuery({ query: device.laptopL });
  const isLaptopM = useMediaQuery({ query: device.laptopM });
  const isLaptopXL = useMediaQuery({ query: device.laptopXL });

  return {
    isTablet,
    isMobileS,
    isMobileM,
    isMobileL,
    isLaptop,
    isLaptopS,
    isLaptopL,
    isLaptopXL,
    isLaptopM,
  };
};

