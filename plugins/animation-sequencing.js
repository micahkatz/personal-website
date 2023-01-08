const plugin = require('tailwindcss/plugin');

const makeAnimationSequenceUtilities = (keyframes, options, sequence) => {
    const animationSequenceUtilities = {};
    const animationValues = [];
    const animationKeys = [];

    Object.keys(keyframes).forEach((keyframeName) => {
        Array.from(Array(options.maxSequences).keys()).forEach((idx) => {
            animationKeys.push(
                `.animate-${keyframeName}${idx === 0 ? `` : `-${idx + 1}`}`
            );
            animationValues.push({
                'animation-name': keyframeName,
                'animation-fill-mode': options.fillMode || '',
                'animation-delay': idx * options.delayMultiple + 's',
                'animation-timing-function': options.easing,
                'animation-duration': options.duration || '',
            });
        });
    });

    animationKeys.forEach((_, idx) => {
        animationSequenceUtilities[animationKeys[idx]] = animationValues[idx];
    });

    return animationSequenceUtilities;
};

const makeAnimationDurationUtilities = (animationDurations) => {
    const animationDurationUtilites = {};
    const durationKeys = [];
    const durationValues = [];

    Object.entries(animationDurations).forEach((duration) => {
        durationKeys.push(`.animation-duration-${duration[0]}`);
        durationValues.push({
            'animation-duration': duration[1],
        });
    });

    durationKeys.forEach((_, idx) => {
        animationDurationUtilites[durationKeys[idx]] = durationValues[idx];
    });

    return animationDurationUtilites;
};

const makeDelayMultipleUtilities = () => {
    const delayMultipleUtilities = {};
    const delayKeys = [];
    const delayValues = [];

    Object.entries(animationDurations).forEach((duration) => {
        delayKeys.push(`.animation-delay-multiple-${duration[0]}`);
        delayValues.push({
            'animation-delay-multiple': duration[1],
        });
    });

    delayKeys.forEach((_, idx) => {
        delayMultipleUtilities[delayKeys[idx]] = delayValues[idx];
    });

    return delayMultipleUtilities;
};

module.exports = plugin(function ({ addUtilities, theme }) {
    const options = theme('animationSequence.options', {});
    const sequence = theme('animationSequence.sequence', []);
    const keyframes = theme('keyframes', {});
    // For now, animation-duration utilities use transitionDuration values
    const durations = theme('transitionDuration', {});
    const animationUtilities = makeAnimationSequenceUtilities(
        keyframes,
        options,
        sequence
    );
    const animationDurationUtilities =
        makeAnimationDurationUtilities(durations);

    // const animationSequenceUtilities =
    //     makeDelayMultipleUtilities();

    addUtilities(animationUtilities);
    addUtilities(animationDurationUtilities);
});
