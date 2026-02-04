
import hkLogo from '../assets/hk-logo.jpg';

const Logo = ({ size = "normal" }: { size?: "normal" | "large" }) => {
    const isLarge = size === "large";

    return (
        <div className={`relative flex items-center justify-center rounded-full overflow-hidden ${isLarge ? 'w-32 h-32' : 'w-12 h-12'}`}>
            <img
                src={hkLogo}
                alt="HK Graphics"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Logo;
