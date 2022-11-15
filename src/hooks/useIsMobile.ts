import { useState, useEffect } from "react";
const MOBILE_WIDTH = 768;

const getWindowWidth = (): number => {
    return window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth;
};
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
        const handleResize = (): void => {
            const nowIsMobile = getWindowWidth() <= MOBILE_WIDTH;
            setIsMobile(prev => prev !== nowIsMobile ? nowIsMobile : prev);
        }
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
}
    
export default useIsMobile;