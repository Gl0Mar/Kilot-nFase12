$( document ).ready(function() {
    
    //Activar Menu
        var autoHeight
    
        $(".seccionesMenu").on( "click", function() {
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")

            var activo = this.className.split(" ")
            $("."+activo[0]).addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            if(activo[0]=="home"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $('#cajaIframe', window.parent.document).height("995px");
                  $('#iframeP', window.parent.document).height("995px");
            }
            if(activo[0]=="bases"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $(".basess").addClass("bactivo")
                $(".calendario").removeClass("bactivo")
                $(".pasos").removeClass("bactivo")
                $(".catego").removeClass("bactivo")
                $(".tPaso").removeClass("activo")
                $(".tCatego").removeClass("activo")
                $(".tBases").addClass("activo")
                $(".tCalendario").removeClass("activo")
                $('#cajaIframe', window.parent.document).height("1300px");
                $('#iframeP', window.parent.document).height("1300px");   
            }
            if(activo[0]=="premios"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $('#cajaIframe', window.parent.document).height("580px");
                $('#iframeP', window.parent.document).height("580px");   
            }
            if(activo[0]=="dietas"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $('#cajaIframe', window.parent.document).height("1400px");
                $('#iframeP', window.parent.document).height("1400px");   
            }
            if(activo[0]=="calendario"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $('#cajaIframe', window.parent.document).height("740px");
                $('#iframeP', window.parent.document).height("740px");   
            }
            if(activo[0]=="rutinas"){
                $("#VidMos").attr("src"," ")
                $(".videoImagen").css("display", "block")
                $('#cajaIframe', window.parent.document).height("1550px");
                $('#iframeP', window.parent.document).height("1550px");   
            }    

        })
        $(".basesHome").on( "click", function() {
            $("#VidMos").attr("src"," ")
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")
            $(".bases").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1350px");
            $('#iframeP', window.parent.document).height("1350px");                   
            
        })
                
        $(".premiosHome").on( "click", function() {
            $("#VidMos").attr("src"," ")
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")
            $(".premios").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("580px");
            $('#iframeP', window.parent.document).height("580px");  
        })
        $(".dietasHome").on( "click", function() {
            $("#VidMos").attr("src"," ")
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")
            $(".dietas").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1400px");
            $('#iframeP', window.parent.document).height("1400px");  
        })
        $(".calendarioHome").on( "click", function() {
            $("#VidMos").attr("src"," ")
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")
            $(".bases").addClass("activo")
            $(".calendario").addClass("bactivo")
            $(".pasos").removeClass("bactivo")
            $(".basess").removeClass("bactivo")
            $(".catego").removeClass("bactivo")
            $(".tPaso").removeClass("activo")
            $(".tCatego").removeClass("activo")
            $(".tBases").removeClass("activo")
            $(".tCalendario").addClass("activo")
            $("#basesHome").addClass("activo")
            $("#pasoHome").addClass("activo")
            $("#categoHome").addClass("activo")
            $("#calendarioHome").removeClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("740px");
            $('#iframeP', window.parent.document).height("740px");  
        })
        $(".rutinasHome").on( "click", function() {
            $("#VidMos").attr("src"," ")
            $(".secciones").removeClass("activo")
            $(".seccionesMenu").removeClass("activo")
            $(".rutinas").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1400px");
            $('#iframeP', window.parent.document).height("1400px");  
        })
    //BasesSecciones
        $("#basesHome").on( "click", function(){
            $("#VidMos").attr("src"," ")
            $(".desactivado").removeClass("bactivo")
            $(".basess").addClass("bactivo")
            $(".pasos").removeClass("bactivo")
            $(".catego").removeClass("bactivo")
            $(".calendario").removeClass("bactivo")
            $(".tPaso").removeClass("activo")
            $(".tCatego").removeClass("activo")
            $(".tCalendario").removeClass("activo")
            $(".tBases").addClass("activo")
            $("#basesHome").removeClass("activo")
            $("#pasoHome").addClass("activo")
            $("#categoHome").addClass("activo")
            $("#calendarioHome").addClass("activo")
            $("#bEquipos").addClass("bActive")
            $("#bIndividual").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1350px");
            $('#iframeP', window.parent.document).height("1350px");            
        })
        $("#pasoHome").on( "click", function(){
            $("#VidMos").attr("src"," ")
            $(".desactivado").removeClass("bactivo")
            $(".pasos").addClass("bactivo")
            $(".basess").removeClass("bactivo")
            $(".catego").removeClass("bactivo")
            $(".calendario").removeClass("bactivo")
            $(".tPaso").addClass("activo")
            $(".tCatego").removeClass("activo")
            $(".tBases").removeClass("activo")
            $(".tCalendario").removeClass("activo")
            $("#basesHome").addClass("activo")
            $("#pasoHome").removeClass("activo")
            $("#categoHome").addClass("activo")
            $("#calendarioHome").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1350px");
            $('#iframeP', window.parent.document).height("1350px");  
        })
        $("#categoHome").on( "click", function(){
            $("#VidMos").attr("src"," ")
            $(".desactivado").removeClass("bactivo")
            $(".catego").addClass("bactivo")
            $(".pasos").removeClass("bactivo")
            $(".basess").removeClass("bactivo")
            $(".calendario").removeClass("bactivo")
            $(".tPaso").removeClass("activo")
            $(".tCatego").addClass("activo")
            $(".tBases").removeClass("activo")
            $(".tCalendario").removeClass("activo")
            $("#basesHome").addClass("activo")
            $("#pasoHome").addClass("activo")
            $("#categoHome").removeClass("activo")
            $("#calendarioHome").addClass("activo")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("950px");
            $('#iframeP', window.parent.document).height("950px");              
        })     
         
        $("#calendarioHome").on( "click", function(){
            $("#VidMos").attr("src"," ")
            $(".desactivado").removeClass("bactivo")
            $(".calendario").addClass("bactivo")
            $(".basess").removeClass("bactivo")
            $(".pasos").removeClass("bactivo")
            $(".catego").removeClass("bactivo")
            $(".tPaso").removeClass("activo")
            $(".tCatego").removeClass("activo")
            $(".tBases").removeClass("activo")
            $(".tCalendario").addClass("activo")
            $("#basesHome").addClass("activo")
            $("#pasoHome").addClass("activo")
            $("#categoHome").addClass("activo")
            $("#calendarioHome").removeClass("activo")
            $("#bEquipos").addClass("bActive")
            $("#bIndividual").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("740px");
            $('#iframeP', window.parent.document).height("740px");            
        })
    //TABS
        $("#bEquipos").on("click", function(){
            $("#VidMos").attr("src"," ")
            $(".infoInactivo").removeClass("infoActivo")
            $(".bEquipos").addClass("infoActivo")
            $(".bIndividual").removeClass("infoActivo")
            $(".bIndividual").addClass("infoInactivo")
            $(".equipos").addClass("bActive")
            $(".individual").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1150px");
            $('#iframeP', window.parent.document).height("1150px");   

    
        })
        $("#bIndividual").on("click", function(){
            $("#VidMos").attr("src"," ")
            $(".infoInactivo").removeClass("infoActivo")
            $(".bIndividual").addClass("infoActivo")
            $(".bEquipos").removeClass("infoActivo")
            $(".bEquipos").addClass("infoInactivo")
            $(".individual").addClass("bActive")
            $("#bEquipos").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1300px");
            $('#iframeP', window.parent.document).height("1300px");   
        })

        $("#pEquipos").on("click", function(){
            $("#VidMos").attr("src"," ")
            $(".infoInactivo").removeClass("infoActivo")
            $(".pEquipos").addClass("infoActivo")
            $(".pIndividual").addClass("infoInactivo")
            $(".equipos").addClass("bActive")
            $(".individual").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1350px");
            $('#iframeP', window.parent.document).height("1350px"); 

    
        })
        $("#pIndividual").on("click", function(){
            $("#VidMos").attr("src"," ")
            $(".infoInactivo").removeClass("infoActivo")
            $(".pIndividual").addClass("infoActivo")
            $(".pEquipos").removeClass("infoActivo")
            $(".pEquipos").addClass("infoInactivo")
            $(".individual").addClass("bActive")
            $("#pEquipos").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("1200px");
            $('#iframeP', window.parent.document).height("1200px"); 
        })
    
        $("#cEquipo").on("click", function(){
            $(".infoInactivo").removeClass("infoActivo")
            $(".cEquipo").addClass("infoActivo")
            $(".cIndividual").removeClass("infoActivo")
            $(".cIndividual").addClass("infoInactivo")
            $(".equipos").addClass("bActive")
            $(".individual").removeClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("950px");
            $('#iframeP', window.parent.document).height("950px"); 
        })
        $("#cIndividual").on("click", function(){
            $("#VidMos").attr("src"," ")
            $(".infoInactivo").removeClass("infoActivo")
            $(".cIndividual").addClass("infoActivo")
            $(".cEquipo").removeClass("infoActivo")
            $(".cEquipo").addClass("infoInactivo")
            $(".equipos").removeClass("bActive")
            $(".individual").addClass("bActive")
            $('html,body').animate({scrollTop:0},400);
            $('#cajaIframe', window.parent.document).height("500px");
            $('#iframeP', window.parent.document).height("500px"); 
        })
        //Pop

        document.getElementById("BtnQr").onclick=function(){
        document.getElementById("PopIntro").style.left="100px";
       }
       document.getElementById("IcoCerrar").onclick=function(){
       document.getElementById("PopIntro").style.left="2700px";
       }

    //Videos

    var urlVid1= ""

    var urlVid1=""

    $("#vid1").on( "click", function() {
        $(".videoImagen").css("display", "none")
        $("#VidMos").css("display", "block")
        $("#VidMos").attr("src"," ")
         $("#VidMos").attr("src","https://portal.socio.gs/html/videos/FamiliaSocios/Salud/NutricionSocio/Kiloton2020/12639_Fase12/main.html")
    })
    $("#vid2").on( "click", function() {
        $(".videoImagen").css("display", "none")
        $("#VidMos2").css("display", "block")
        $("#VidMos2").attr("src"," ")
         $("#VidMos2").attr("src","https://portal.socio.gs/html/videos/FamiliaSocios/Salud/NutricionSocio/Kiloton2020/12639_Fase5/main.html")
    })



    /*Multilink*/    

    var url = parent.window.document.location.pathname;
        path = url.split("/");
    var urlFinal = path[path.length-2];
   
    if(urlFinal=="ekth12639"){
        $(".liga").attr("href", "https://portal.socio.gs/v4/elektra/familiasocio/salud/programas/kiloton/ekt12639-1")
    }  
    if(urlFinal=="ekth12639-2"){
        $(".liga").attr("href", "https://portal.socio.gs/v4/elektra/familiasocio/salud/programas/kiloton/ekt12639-1")
    }  
    if(urlFinal=="gsh12639"){
        $(".liga").attr("href", "https://portal.socio.gs/v4/gs/familiasocios/salud/programas/kiloton/gs12639-1")
    }
    if(urlFinal=="gsh12639-2"){
        $(".liga").attr("href", "https://portal.socio.gs/v4/elektra/familiasocio/salud/programas/kiloton/ekt12639-1")
    }  
    if(urlFinal=="bazh12639"){
        $(".liga").attr("href","https://portal.socio.gs/v4/gs/familiasocios/salud/programas/kiloton/gs12639-1")
    }
    if(urlFinal=="bazh12639-2"){
        $(".liga").attr("href", "https://portal.socio.gs/v4/bancoazteca/familiasocio/salud/programas/kiloton/baz12639-1")
    }  
    if(urlFinal=="azth12639"){
        $(".liga").attr("href","https://portal.socio.gs/v4/tvazteca/familiasocio/salud/programas/kiloton/azt12639-1")
    }   
    if(urlFinal=="azth12639-2"){
        $(".liga").attr("href","https://portal.socio.gs/v4/tvazteca/familiasocio/salud/programas/kiloton/azt12639-1")
    }        
    if(urlFinal=="tpeh12639"){
        $(".liga").attr("href","https://portal.socio.gs/v4/totalplay/familiasocio/salud/programas/kiloton/tpe12639-1")
    }
    if(urlFinal=="tpeh12639-2"){
        $(".liga").attr("href","https://portal.socio.gs/v4/totalplay/familiasocio/salud/programas/kiloton/tpe12639-1")
    }
    if(urlFinal=="itah12639"){
        $(".liga").attr("href","https://portal.socio.gs/V4/italika/familiasocio/salud/programas/kiloton/ita12639-1/")
    }
    if(urlFinal=="itah12639-2"){
        $(".liga").attr("href","https://portal.socio.gs/V4/italika/familiasocio/salud/programas/kiloton/ita12639-1/")
    }
    if(urlFinal=="red-opth12639"){
        $(".liga").attr("href","https://portal.socio.gs/V4/redesopticas/familiasocios/salud/programas/kiloton/red-opth12639-1/")
    }
    if(urlFinal=="red-opth12639-2"){
        $(".liga").attr("href","https://portal.socio.gs/V4/redesopticas/familiasocios/salud/programas/kiloton/red-opth12639-1/")
    }
    });
