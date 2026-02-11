'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { StaticImageData } from 'next/image';

interface ScrollRevealImageProps {
    image: StaticImageData
    isBlurred?: boolean
}

export default function ScrollRevealImage({ image, isBlurred = false }: ScrollRevealImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Captura o scroll relativo ao elemento
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    // Animação do clip-path (cortina abrindo)
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'inset(0% 0% 100% 0%)', // fechado
            'inset(0% 0% 0% 0%)',   // aberto
        ]
    )

    // Zoom leve
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl"
        >
            <motion.img
                src={image.src}
                alt="image"
                style={{
                    clipPath,
                    scale,
                }}
                className={`h-full w-full object-cover transition-all duration-300 ${
                    isBlurred ? 'blur-md' : 'blur-0'
                }`}
            />
        </div>
    )
}
