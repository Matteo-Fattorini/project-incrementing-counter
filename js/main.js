$(".counter").each(function () {
    $(this).text("0");

    const updateCounter = () => {
        const target = +$(this).attr("data-target");
        const c = +$(this).text();
        const increment = target / 150;

        if (c < target) {
            $(this).text(Math.ceil(c + increment))
            setTimeout(updateCounter,1)
        } else {
            $(this).text(target)
        }
    }

    updateCounter();
})

