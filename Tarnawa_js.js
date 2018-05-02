$(document).ready(function () {
    $('.wiecej').click(function () {
        $('#ukryty').slideToggle(800);
        $(this).toggleClass('close');
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 30) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });
    $("#Ofirmie").click(function () {
        $('html, body').animate({
            scrollTop: $("#o_firmie").offset().top
        }, 1000);
    });
    $("#Offf").click(function () {
        $('html, body').animate({
            scrollTop: $(".oferta").offset().top
        }, 1000);
    });
    $("#mennu").click(function () {
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 1000);
    });
    $("#wlos").click(function () {
        $('#wloski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#wloski").offset().top
        }, 1250);
    });
	$("#ang").click(function () {
        $('#angielski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#angielski").offset().top
        }, 1250);
    });
    $("#niem").click(function () {
        $('#niemiec').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#niemiec").offset().top
        }, 1250);
    });
    $("#fran").click(function () {
        $('#francuski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#francuski").offset().top
        }, 1250);
    });
    $("#hi").click(function () {
        $('#hiszp').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#hiszp").offset().top
        }, 1250);
    });
    $("#pr").click(function () {
        $('#port').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#port").offset().top
        }, 1250);
    });
    $("#rez").click(function () {
        $('html, body').animate({
            scrollTop: $(".rezerwacja").offset().top
        }, 1500);
    });
    $("#formula").click(function () {
        $('#login').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#login").offset().top
        }, 500);
    });
    $("#angielski2").click(function () {
        $('#angielski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#angielski").offset().top
        }, 500);
    });
    $("#wloski2").click(function () {
        $('#wloski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#wloski").offset().top
        }, 500);
    });
    $("#francuski2").click(function () {
        $('#francuski').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#francuski").offset().top
        }, 500);
    });
    $("#hiszp2").click(function () {
        $('#hiszp').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#hiszp").offset().top
        }, 500);
    });
    $("#port2").click(function () {
        $('#port').slideToggle(800);
        $('html, body').animate({
            scrollTop: $("#port").offset().top
        }, 500);
    });
    
    $("#kon").click(function () {
        $('html, body').animate({
            scrollTop: $("#kontakt").offset().top
        }, 2000);
    });
    $("#zro").click(function () {
        $('html, body').animate({
            scrollTop: $(".zrodla").offset().top
        }, 2000);
    });


    $('#uganda').click(function () {

        $('#uganda_ukryty').slideToggle(800);
    });
    $('#kongo').click(function () {

        $('#kongo_ukryty').slideToggle(800);
    });
    $('#korea').click(function () {

        $('#korea_ukryty').slideToggle(800);
    });
    $('#suri').click(function () {

        $('#suri_ukryty').slideToggle(800);
    });
    $('#rumunia').click(function () {

        $('#lista2').slideToggle(800);
    });
    $('#buka').click(function () {

        $('#buka_ukryty').slideToggle(800);
    });
    $('#timi').click(function () {

        $('#timi_ukryty').slideToggle(800);

    });
    $('#wes').click(function () {

        $('#wes_ukryty').slideToggle(800);
    });
    $('#kons').click(function () {

        $('#kons_ukryty').slideToggle(800);
    });
    $('#kuro').click(function () {

        $('#kuro_ukryty').slideToggle(800);
    });
    $('#angielski3').click(function () {

        $('#angielski').slideToggle(800);
    });
    $('#hiszp3').click(function () {

        $('#hiszp').slideToggle(800);
    });
    $('#wloski3').click(function () {

        $('#wloski').slideToggle(800);
    });
    $('#niemiec3').click(function () {

        $('#niemiec').slideToggle(800);
    });
    $('#francuski3').click(function () {

        $('#francuski').slideToggle(800);
    });
    $('#port3').click(function () {

        $('#port').slideToggle(800);
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}