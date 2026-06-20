import { useEffect } from "react";

export default function CursorComponent() {
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('cursor-pointer');
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });

        window.addEventListener('mousedown', () => {
            const cursor = document.getElementById('cursor-pointer');
            if (cursor) {
                cursor.style.transition = 'transform 0.2s ease';
                cursor.style.transform = 'rotate(135deg)';
                cursor.style.boxShadow = '0 0 15px white';
            }
        });

        window.addEventListener('mouseup', () => {
            const cursor = document.getElementById('cursor-pointer');
            if (cursor) {
                cursor.style.transition = 'transform 0.2s ease';
                cursor.style.transform = 'rotate(0deg)';
                cursor.style.boxShadow = '0 0 10px white';
            }
        });
    }
    )
    return (
        <div id="cursor-pointer" className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-white pointer-events-none transform shadow-[0_0_10px_white] z-6" />
    );
}