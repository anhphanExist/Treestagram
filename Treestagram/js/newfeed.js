$(document).ready(function(){
    // load image content
    var img_link_list = ["https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/52609019_2261465920737996_1517011096379064320_o.jpg?_nc_cat=101&_nc_oc=AQmFw40xHwR7zx0n0I8Id9T8Oaf1e8hfXnjkCyPiJmTQTQ2P28ks51gffp0F0K11EX4K7CrpKtUFMtYEmgowtYRy&_nc_ht=scontent.fhan2-1.fna&oh=ccb372d2c7872922c5c56f698a11e98f&oe=5D612846",
                "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/54521712_2366754506982918_8340369293858308096_n.jpg?_nc_cat=100&_nc_oc=AQkjbHMQygbOxGroKHldoz1BQx5HUsF5LwjpWnQUoNOBmPqZUtBq5t6VqL0fXp6OrsCBgK8vwgexFTq-ONxGixYm&_nc_ht=scontent.fhan2-4.fna&oh=d1eb5e754999bd19c51127f6811c6ee0&oe=5D717666",
                "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/c1.0.958.958a/58463084_325716388126169_3658119638522265600_n.jpg?_nc_cat=109&_nc_oc=AQkqMiVy3VmFlsQk_Pymsk3bzN04rH664stCTQwisL319DlS4mNkFfalmrOgp6V90oFRTdEFJLOKVrbl934N01BR&_nc_ht=scontent.fhan2-3.fna&oh=66232f340921a9125a7f8e38106fb181&oe=5D663C3C",
                "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/47389766_1062507290597245_4586966746472120320_o.jpg?_nc_cat=102&_nc_oc=AQmPfe9tdLrhiw5oDtZRSuhhQcuoWL0qYZMIzVtB18JLvixpUPUvbbL7b2hUe9RU3NfsRM1kKEUWwqo0JWUgaPXp&_nc_ht=scontent.fhan2-1.fna&oh=a52a2b1be584d6e3a4274c835509c14f&oe=5D6AA1D6"];
    
    document.getElementById("adding-pic").insertAdjacentHTML("beforeend", getHtmlContent(img_link_list))

    $('#displayPage').prependTo('.body-wrap-2')

    $('.menubar li').click(function(){
        $(this).children('ul').slideToggle();
    })
})


function getHtmlContent(img_link_list) {
    var res = ""
    var preOriginHtml = "<li><img src=\""
    var postOriginHtml = "\"/></li>"

    img_link_list.forEach(img_link => {
        console.log(img_link)

        var element = preOriginHtml
        element = element.concat(img_link)
        element = element.concat(postOriginHtml)

        res = res.concat(element)
    });

    return res;
}

