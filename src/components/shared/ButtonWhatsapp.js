import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const ButtonWhatsapp = () => {

    const [visible, setVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const phoneNumber = "+13464794000";
    const message = "Hola, necesito ayuda";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // ⏱ Mostrar después de 4s
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // 💬 Tooltip aparece ligeramente después
    useEffect(() => {
        if (visible) {
            const tooltipTimer = setTimeout(() => {
                setShowTooltip(true);
            }, 800);

            return () => clearTimeout(tooltipTimer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div style={styles.wrapper}>
            {showTooltip && (
                <div style={styles.tooltip}>
                    ¿Necesitas ayuda?
                </div>
            )}

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
                aria-label="Chat en WhatsApp"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <div style={styles.pulse}></div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    style={styles.icon}
                >
                    <path
                        fill="white"
                        d="M16.001 3.2c-7.056 0-12.8 5.744-12.8 12.8 0 2.256.576 4.448 1.664 6.4L3.2 28.8l6.656-1.664c1.856 1.024 3.968 1.6 6.144 1.6h.001c7.056 0 12.8-5.744 12.8-12.8S23.057 3.2 16.001 3.2zm0 23.04c-1.92 0-3.776-.512-5.376-1.472l-.384-.224-3.968.992.992-3.872-.256-.4c-1.056-1.664-1.632-3.584-1.632-5.568 0-5.76 4.704-10.464 10.496-10.464s10.496 4.704 10.496 10.464-4.704 10.464-10.496 10.464zm5.76-7.872c-.32-.16-1.888-.928-2.176-1.024-.288-.096-.512-.16-.736.16-.224.32-.832 1.024-1.024 1.216-.192.192-.384.224-.704.064-.32-.16-1.344-.496-2.56-1.6-.944-.832-1.6-1.856-1.792-2.176-.192-.32-.016-.48.144-.64.144-.144.32-.384.48-.576.16-.192.224-.32.352-.544.128-.224.064-.416-.032-.576-.096-.16-.736-1.792-1.024-2.464-.272-.656-.544-.576-.736-.576-.192 0-.416 0-.64 0s-.576.064-.864.384c-.288.32-1.12 1.088-1.12 2.656s1.152 3.072 1.312 3.296c.16.224 2.272 3.456 5.504 4.736.768.256 1.376.416 1.856.544.784.208 1.504.176 2.064.112.64-.064 1.888-.768 2.144-1.504.256-.736.256-1.376.176-1.504-.08-.128-.288-.192-.608-.352z"
                    />
                </svg>
            </a>
        </div>
    );
};

const styles = {
    wrapper: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999
    },
    button: {
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        position: "relative",
        textDecoration: "none"
    },
    icon: {
        width: "28px",
        height: "28px",
        zIndex: 2
    },
    pulse: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        opacity: 0.5,
        animation: "pulse 2s infinite"
    },
    tooltip: {
        position: "absolute",
        bottom: "75px",
        right: "0",
        backgroundColor: "#111",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        fontSize: "14px",
        whiteSpace: "nowrap",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        animation: "fadeInUp 0.3s ease"
    }
};