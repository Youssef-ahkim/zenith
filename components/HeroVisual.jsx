export default function HeroVisual() {
    return (
        <div className="grid grid-cols-2 gap-0 perspective-1000">
            {/* Top Left */}
            <div className="animate-p1 opacity-0">
                <img src="/1.png" className="max-w-[150px] lg:max-w-[250px] h-auto block" alt="" />
            </div>

            {/* Top Right */}
            <div className="animate-p2 opacity-0">
                <img src="/2.png" className="max-w-[150px] lg:max-w-[250px] h-auto block" alt="" />
            </div>

            {/* Bottom Left */}
            <div className="animate-p3 opacity-0">
                <img src="/3.png" className="max-w-[150px] lg:max-w-[250px] h-auto block" alt="" />
            </div>

            {/* Bottom Right */}
            <div className="animate-p4 opacity-1">
                <img src="/4.png" className="max-w-[150px] lg:max-w-[250px] h-auto block" alt="" />
            </div>
        </div>
    );
}