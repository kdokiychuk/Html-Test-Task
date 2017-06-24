/**
 * Created by mikol on 24.06.2017.
 */
$(document).ready(function () {
    itemSearchIcon= $('.searchDiv').html();
    itemShopIconTel= $('.shop').html();
    itemAccountIconTel= "<div class='account'>" + $('.account').html() + '</div>';
    itemTelIconTel=  "<div class='contactsDiv'>" + $('.contactsDiv').html() + '</div>';
    $('.itemSearchIconTel').click(function () {
       $('.modal-text').html(itemSearchIcon);
        $('.modal-title').html("Поиск");
    });
    $('.itemShopIconTel').click(function () {
        $('.modal-text').html(itemShopIconTel);
        $('.modal-title').html("Магазин");
    });
    $('.itemAccountIconTel').click(function () {
        $('.modal-text').html(itemAccountIconTel);
        $('.modal-title').html("Аккаунт");
    });
    $('.itemTelIconTel').click(function () {
        $('.modal-text').html(itemTelIconTel);
        $('.modal-title').html("Телефон");
    });
});