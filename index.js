var baseconfig = {
    currencySymbol: "$",
    priceIeltsi30: "7.99",
    priceIeltsi8: "1.99",
    priceIeltsi4: "0.99",
};

var config = {
    dev: {
        staticAssetsBasePath: "https://asgard-thor-assets.comprodls.com/ielts",
        ...baseconfig
    },
    qa: {
        staticAssetsBasePath: "https://qa-assets.cambridgeone.org/ielts",
        ...baseconfig
    },
    local: {
        staticAssetsBasePath: "http://localhost:8080/ieltsi",
        ...baseconfig
    }
};

var envConfig = {};

switch (document.location.hostname) {
    case "micro-nemo.comprodls.com":
        envConfig = config.dev;
        break;
    case "qa.cambridgeone.org":
        envConfig = config.qa;
        break;
    case "localhost":
        envConfig = config.local;
        break;
    default:
        envConfig = config.dev;
}

var imgBackgroundIelts = document.getElementById('imgBackgroundIelts');
imgBackgroundIelts.style = "background: url('" + envConfig.staticAssetsBasePath + "/pc/v2/img/bg-image-ielts.png'); background-size: cover; min-height: 320px; background-repeat: no-repeat; background-position: top-left;"

var imgCUPLogo = document.getElementById('imgCUPLogo');
imgCUPLogo.src = envConfig.staticAssetsBasePath + "/pc/v2/img/cup-logo.svg";

var imgIELTSLogo = document.getElementById('imgIELTSLogo');
imgIELTSLogo.src = envConfig.staticAssetsBasePath + "/pc/v2/img/IELTSi_logo.png";

var imgLongArrowRight = document.getElementById('imgLongArrowRight');
imgLongArrowRight.src = envConfig.staticAssetsBasePath + "/pc/v2/img/long_arrow_right.svg";

var imgLongArrowRightWhite = document.getElementById('imgLongArrowRightWhite');
imgLongArrowRightWhite.src = envConfig.staticAssetsBasePath + "/pc/v2/img/long_arrow_right_white.svg";

var imgPeopleLogo = document.getElementById('imgPeopleLogo');
imgPeopleLogo.src = envConfig.staticAssetsBasePath + "/pc/v2/img/people-logo.png";

var imgLongArrowRightInverted = document.getElementById('imgLongArrowRightInverted');
imgLongArrowRightInverted.src = envConfig.staticAssetsBasePath + "/pc/v2/img/long_arrow_right_inverted.svg";

var imgStep1 = document.getElementById('imgStep1');
imgStep1.src = envConfig.staticAssetsBasePath + "/pc/v2/img/step-1.png";

var imgStep2 = document.getElementById('imgStep2');
imgStep2.src = envConfig.staticAssetsBasePath + "/pc/v2/img/step-2-select-skill-band.png";

var imgStep3 = document.getElementById('imgStep3');
imgStep3.src = envConfig.staticAssetsBasePath + "/pc/v2/img/step-3.png";

var imgStep4 = document.getElementById('imgStep4');
imgStep4.src = envConfig.staticAssetsBasePath + "/pc/v2/img/step-4.png";

var imgVisaIcon = document.getElementById('imgVisaIcon');
imgVisaIcon.src = envConfig.staticAssetsBasePath + "/pc/v2/img/visa-icon.png";

var imgMasterCardIcon = document.getElementById('imgMasterCardIcon');
imgMasterCardIcon.src = envConfig.staticAssetsBasePath + "/pc/v2/img/master-card.png";

var imgAmexIcon = document.getElementById('imgAmexIcon');
imgAmexIcon.src = envConfig.staticAssetsBasePath + "/pc/v2/img/amex.png";

var imgStep6 = document.getElementById('imgStep6');
imgStep6.src = envConfig.staticAssetsBasePath + "/pc/v2/img/step-6.png";

var imgLongArrowRight2 = document.getElementById('imgLongArrowRight2');
imgLongArrowRight2.src = envConfig.staticAssetsBasePath + "/pc/v2/img/long_arrow_right.svg";

var imgLongArrowRight3 = document.getElementById('imgLongArrowRight3');
imgLongArrowRight3.src = envConfig.staticAssetsBasePath + "/pc/v2/img/long_arrow_right.svg";

resolveText('currencySymbol', envConfig.currencySymbol);
resolveText('priceIeltsi4', envConfig.priceIeltsi4);
resolveText('priceIeltsi8', envConfig.priceIeltsi8);
resolveText('priceIeltsi30', envConfig.priceIeltsi30);

function resolveText(className, text) {
    var elements = document.getElementsByClassName(className);
    for (element of elements) {
        element.innerText = text;
    }
}

function pushToDataLayer(data) {
    if (!window.dataLayer) {
        console.log("Data Layer does not exist. Unable to post to Google Analytics")
    } else {
        window.dataLayer.push(data);
    }
}

function login() {
    window.location = document.location.origin + "/login?ielts=true"
}
function getStarted() {
    let data = { event: 'ieltsi.signupclick' };
    pushToDataLayer(data);
    window.location = document.location.origin + "/register-learner?ielts=true"
}
function tryForFree() {
    window.location = document.location.origin + "/ieltsi/v2/sample-test"
}
