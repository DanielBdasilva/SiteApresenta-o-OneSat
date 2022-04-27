jQuery(document).ready
(
    function($){
        var controleNav = false;
        $(document).scroll(
            function(e)
            {
                var scrollTop = $(document).scrollTop();
                if (scrollTop > $('.navbar').height()) 
                {
                    if(controleNav == false)
                    {
                        $('.navbar').removeClass('static-top').addClass('fixed-top');
                        $('.navbar').addClass('navSmall');
                        controleNav = true;

                    }
                } 
                else 
                {
                    if(controleNav == true)
                    {
                        $('.navbar').removeClass('fixed-top').addClass('static-top');
                        $('.navbar').removeClass('navSmall');
                        controleNav = false;
                    }
                }
            }
        );
    }
);