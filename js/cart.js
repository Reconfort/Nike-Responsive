const body = document.getElementById('body');
const container = document.getElementById('contain');
const wrapper = document.getElementById('cartInfo');
const Image = document.getElementById('Image');
const Info = document.getElementById('infos');
const Buy = document.getElementById('buy');
const cartClose = document.getElementById('cartClose');


function cartAdd(){
    // body.style.background ="transparent";
    // body.style.position ="absolute";
    // body.style.width ="100vw";
    // body.style.height ="100vh";
    // body.style.display ="flex";
    // body.style.justifyContent ="center";
    // body.style.alignItems ="center";
    // container.style.position ="absolute";
    container.style.background ="transparent";
    container.style.width ="100vw";
    container.style.height ="75vh";
    container.style.display ="flex";
    container.style.justifyContent ="center";
    container.style.alignItems ="center";
    Info.style.position="absolute"
    Info.style.transform="scale(1)"
    wrapper.style.width = "900vw"
    wrapper.style.zIndex="800"
    wrapper.style.marginTop="-5vh"
    wrapper.style.borderRadius="30px"
    wrapper.style.boxShadow="0 0 100px black"
    Image.style.transform="rotate(-20deg)"
    Image.style.marginTop="3%"
    Image.style.zIndex="1000"
    Image.style.transform="scale(1.3)"
    Info.style.zIndex="900"
    Info.style.marginLeft="10%"
    Info.style.marginTop="3%"
    Buy.style.position="absolute"
    Buy.style.left="0"
    Buy.style.marginLeft="15%"
    Buy.style.marginBottom="10%"
    Buy.style.transition="0.2s"
    Buy.style.display="flex"
    Buy.style.flexDirection="row"
    Buy.style.justifyContent="space-between"
    Buy.style.alignItems="flex-end"
    // Buy.style.background="red"
    cartClose.style.display="block"
    // wrapper.style.background = "red"
    // wrapper.style.position = "absolute"
}
function cancelShop(){
    window.location.assign("index.html");
}