
$('body').append(`
<style>
.Mrphs-mainHeader .Mrphs-headerLogo{
    background-image: none !important;
    animation: rainbow 40s linear infinite !important;
}

#linkNav ul li.Mrphs-sitesNav__menuitem.is-selected .link-container, #linkNav #selectQuickLink li.Mrphs-sitesNav__menuitem.is-selected .link-container, #linkNav ul li.Mrphs-sitesNav__menuitem.is-selected .Mrphs-sitesNav__dropdown, #linkNav #selectQuickLink li.Mrphs-sitesNav__menuitem.is-selected .Mrphs-sitesNav__dropdown, #linkNav ul li.Mrphs-sitesNav__menuitem.is-selected .Mrphs-sitesNav__favbtn, #linkNav #selectQuickLink li.Mrphs-sitesNav__menuitem.is-selected .Mrphs-sitesNav__favbtn 
{
    background-image: none !important;
    animation:rainbow 40s linear infinite !important;
}
.is-current{
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}
#toolMenu ul li.is-current .Mrphs-toolsNav__menuitem--link, #toolMenu #selectQuickLink li.is-current .Mrphs-toolsNav__menuitem--link, #subSites ul li.is-current .Mrphs-toolsNav__menuitem--link, #subSites #selectQuickLink li.is-current .Mrphs-toolsNav__menuitem--link 
{
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}
element.style {
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}
#toolMenu ul li.is-current, #toolMenu #selectQuickLink li.is-current, #subSites ul li.is-current, #subSites #selectQuickLink
{
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}
.header{
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}
.Mrphs-footerApp__presence, .Mrphs-footerApp__portalChat{
    background-image: none !important; 
    animation:rainbow 40s linear infinite !important;
}

@keyframes rainbow{
    0% { background-color: #ff0000; }
 8.333% { background-color: #ff8000; }
 16.667% { background-color: #ffff00; }
 25.000% { background-color: #80ff00; }
 33.333% { background-color: #00ff00; }
 41.667% { background-color: #00ff80; }
 50.000% { background-color: #00ffff; }
 58.333% { background-color: #0080ff; }
 66.667% { background-color: #0000ff; }
 75.000% { background-color: #8000ff; }
 83.333% { background-color: #ff00ff; }
 91.667% { background-color: #ff0080; }
 100.00% { background-color: #ff0000; }
}

</style>`)