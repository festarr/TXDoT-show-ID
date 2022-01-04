
window.addEventListener('load', () => {

    //one line cause funny, and for performance
    document.getElementById('LeftFrame').contentWindow.document.getElementById('trLocalId').style.display = "contents";

    /*
    //above code but more legible in 2 lines   
    var iframe = document.getElementById('LeftFrame')
    iframe.contentWindow.document.getElementById('trLocalId').style.display = "contents";
    */
})
