$(document).ready(function() {
    $('.mdb-select').materialSelect();
});

$(document).ready(function () {
    $('.stepper').mdbStepper();
})

function someFunction21() {
    setTimeout(function () {
        $('#horizontal-stepper').nextStep();
    }, 2000);
}