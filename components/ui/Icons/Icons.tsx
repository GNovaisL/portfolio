import { MouseParallax } from "react-just-parallax"
import { MobileImage, PcImage } from "@/assets"
import { RefObject } from "react";
import { motion } from "motion/react"

export const Icons = ({
    paralaxRef
}: { paralaxRef: RefObject<HTMLDivElement | null> }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-x-0 top-28 sm:top-32 md:top-40 z-0 opacity-80 md:opacity-100"
        >
            <MouseParallax strength={0.1} parallaxContainerRef={paralaxRef}>
                <div className="relative mx-auto h-24 sm:h-28 md:h-36 lg:h-44 w-full max-w-[1400px] px-2 sm:px-6 md:px-16 lg:px-24">
                    <div className="absolute left-0 top-0 -translate-y-1/4">
                        <img
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
                            src={PcImage.src}
                            alt="Ilustração de monitor"
                        />
                    </div>
                    <div className="absolute right-0 top-6 sm:top-5 md:top-4">
                        <img
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
                            src={MobileImage.src}
                            alt="Ilustração de smartphone"
                        />
                    </div>
                </div>
            </MouseParallax>
        </motion.div>
    )
}