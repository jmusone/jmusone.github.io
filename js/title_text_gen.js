(function () {
    const KEY = "extra_text";
    let options = [
        "欢迎观临~",
        "I fight for my friends!",
        "If you visit this page again you might get a different message here.",
        "A hand rolled site!? Why???",
        "As seen on TV!",
        "Best in class!",
        "That's no moon!",
        "Minecraft!",
        "Not for mobile viewing!",
        "o/",
        "Where's jaing09?",
        "If you're viewing this site on your phone, I'm so sorry T_T",
        "Former Bass Clarinet Enthusiast!"
    ];

    let output = sessionStorage.getItem(KEY);
    if(!output) {
        output = options[Math.floor(Math.random() * options.length)];
        sessionStorage.setItem(KEY, output);
    }
    document.addEventListener('DOMContentLoaded', () => {
        const textspot = document.getElementById('generated_text');
        if (textspot) textspot.textContent += output;
    });
})();