export function convertPercentageToPx() {
    const root = document.documentElement;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let bgLeftPosX = (-22 / 100) * screenWidth;
    let bgLeftPosY = (5 / 100) * screenHeight;
    let bgLeftSize = (100 / 100) * screenWidth;

    let bgRightPosX = (15 / 100) * screenWidth;
    let bgRightPosY = (6 / 100) * screenHeight;
    let bgRightSize = (100 / 100) * screenWidth;

    let bgMobilePosX = (-5 / 100) * screenWidth;
    let bgMobilePosY = (7 / 100) * screenHeight
    let bgMobileSize = (115 / 100) * screenWidth;

    // Detect Firefox
    // if (navigator.userAgent.includes("Firefox")) {
    //     bgLeftPosX = -35 * 16; // Convert rem to px (1rem = 16px)
    //     bgLeftPosY = 100;
    //     bgRightPosX = -30 * 16;
    //     bgRightPosY = 50;

    //     bgLeftSize = 110 * 16; // Convert rem to px
    //     bgRightSize = 108 * 16;
    // }

    // // Detect Safari
    // if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
    //     bgLeftPosX = -30 * 16;
    //     bgLeftPosY = 110;
    //     bgRightPosX = -25 * 16;
    //     bgRightPosY = 55;

    //     bgLeftSize = 112 * 16;
    //     bgRightSize = 110 * 16;
    // }

    root.style.setProperty("--bgLeft-pos-x", `${bgLeftPosX}px`);
    root.style.setProperty("--bgLeft-pos-y", `${bgLeftPosY}px`);
    root.style.setProperty("--bgLeft-size", `${bgLeftSize}px`);
    
    root.style.setProperty("--bgRight-pos-x", `${bgRightPosX}px`);
    root.style.setProperty("--bgRight-pos-y", `${bgRightPosY}px`);
    root.style.setProperty("--bgRight-size", `${bgRightSize}px`);

    root.style.setProperty("--bgMobile-pos-x", `${bgMobilePosX}px`);
    root.style.setProperty("--bgMobile-pos-y", `${bgMobilePosY}px`);
    root.style.setProperty("--bgMobile-size", `${bgMobileSize}px`);
}
