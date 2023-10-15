var request = 
{
    showPage: function(targetDiv, path)
    {
        var jqxhr = jQuery.post(path, function(data)
        {
            jQuery("#" + targetDiv).html(data);
        });
    },

    showMenu: function(){
        request.showPage("menu", "html/menu.html");
    },

    showHome: function(){
        request.showPage("body", "html/home.html");
    },

    showFooter: function(){
        request.showPage("footer", "html/footer.html");
    },

    loadWelcomePage: function(){
        request.showMenu();
        request.showHome();
        request.showFooter();
    },

    showLogin: function(){
        request.showPage("body", "html/login.html");
    },

    showRegister: function(){
        request.showPage("body", "html/register.html");
    },
    showStudents: function(){
        request.showPage("body", "html/view.html"); 
    },
    showSign: function(){
        request.showPage("body", "html/sign.html");
    },
}