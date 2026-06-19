'use client'

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { LenisProvider } from "@/context/LenisContext";

type LenisInstance = InstanceType<typeof Lenis>;

const TVComponent = ({ children }: { children: React.ReactNode }) => {
    const siteContentRef = useRef<HTMLDivElement | null>(null);
    const [lenis, setLenis] = useState<LenisInstance | null>(null);

    useEffect(() => {
        if (!siteContentRef.current) return;

        const lenisInstance = new Lenis({
            wrapper: siteContentRef.current,
            content: siteContentRef.current.querySelector('main') ?? siteContentRef.current,
            eventsTarget: siteContentRef.current,
            smoothWheel: true,
            syncTouch: true,
            touchMultiplier: 1.5,
            gestureOrientation: 'vertical',
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            autoRaf: true,
            autoResize: true,
            anchors: true,
        });

        setLenis(lenisInstance);

        const onResize = () => lenisInstance.resize();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    return <>
        <div className={`tv-tube-border z-20 hidden lg:block bg-[url(/tv-border.png)] w-full h-full absolute pointer-events-none scale-110`}></div>
        <div className="tv-tube-shape animate-[tv-animation_.5s]">
            <div ref={siteContentRef} className="site-content animate-[opacity-anim_1s]">
                <LenisProvider value={{ lenis }}>
                    <main className='overflow-x-clip scroll-smooth mr-6 ml-6 lg:mr-0 lg:ml-8 invisible-scrollbar w-full min-h-screen'>
                        {children}
                    </main>
                </LenisProvider>
            </div>
        </div>
    </>
}

export default TVComponent