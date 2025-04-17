import { useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const glitchChars = "ÆØΩ∆π≡≠∑√∇╳░▒▓█▇▆▅▄▃▂▁@#$%&*";

    const handleHover = () => {
        let iterations = 0;
        const originalText = text.split("");

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((char, i) => {
                        if (i < iterations) return originalText[i];
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join("")
            );

            iterations += 1;

            if (iterations > originalText.length) {
                clearInterval(interval);
                setDisplayText(text);
            }
        }, 30);
    };

    return (
        <span
            onMouseEnter={handleHover}
            className={`cursor-pointer ${className}`}
        >
            {displayText}
        </span>
    );
};

export default GlitchText;



/* import { useState } from "react";

const GlitchText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const glitchChars = "ÆØΩ∆π≡≠∑√∇╳░▒▓█▇▆▅▄▃▂▁@#$%&*";

    const handleHover = () => {
        let iterations = 0;
        const originalText = text.split("");

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((char, i) => {
                        if (i < iterations) return originalText[i];
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join("")
            );
            iterations += 1;
            if (iterations > originalText.length) {
                clearInterval(interval);
                setDisplayText(text);
            }
        }, 30)
    }

    return (
        <span onMouseEnter={handleHover} className="cursor-pointer transition duration-300 font-orbitron text-white hover:text-cyan-300">
            {displayText}
        </span>
    )
}

export default GlitchText */