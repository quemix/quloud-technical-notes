(() => {
    const fermiAnchors = new Set([
        "#equation-f-e",
        "#equation-f-e-2",
        "#equation-f-e-3",
        "#equation-1-f-e",
    ]);
    const conductionAnchors = new Set([
        "#carrier-mobility",
        "#conduction-band-electrons",
        "#valence-band-holes",
        "#intrinsic-semiconductor",
        "#equation-conductivity",
        "#equation-v-de",
        "#equation-equation-of-motion",
        "#equation-v-de-2",
        "#equation-mu-e",
        "#equation-v-dh",
        "#equation-mu-h",
        "#equation-n-e",
        "#equation-g-c-e",
        "#equation-n-e-2",
        "#equation-n-h",
        "#equation-g-v-e",
        "#equation-n-h-2",
        "#equation-n-i",
        "#equation-conductivity-2",
        "#equation-conductivity-3",
    ]);

    function redirectLegacyAnchor() {
        const anchor = window.location.hash;
        if (anchor === "#id3") {
            window.location.replace("semiconductor_conduction.html#semiconductor-conduction");
        } else if (fermiAnchors.has(anchor)) {
            window.location.replace("fermi_level_and_occupation.html" + anchor);
        } else if (conductionAnchors.has(anchor)) {
            window.location.replace("semiconductor_conduction.html" + anchor);
        }
    }

    redirectLegacyAnchor();
    window.addEventListener("hashchange", redirectLegacyAnchor);
})();
