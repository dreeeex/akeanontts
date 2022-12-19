/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var a = new Audio();
		a.src = "sounds/a.wav"
		var e = new Audio();
		e.src = "sounds/e.wav"
		var i = new Audio();
		i.src = "sounds/i.wav"
		var o = new Audio();
		o.src = "sounds/o.wav"
		var u = new Audio();
		u.src = "sounds/u.wav"
		
		var ea = new Audio();
		ea.src = "sounds/ea.wav"
		var ee = new Audio();
		ee.src = "sounds/ee.wav"
		var ei = new Audio();
		ei.src = "sounds/ei.wav"
		var eo = new Audio();
		eo.src = "sounds/eo.wav"
		var eu = new Audio();
		eu.src = "sounds/eu.wav"
		
		var ba = new Audio();
		ba.src = "sounds/ba.wav"
		var be = new Audio();
		be.src = "sounds/be.wav"
		var bi = new Audio();
		bi.src = "sounds/bi.wav"
		var bo = new Audio();
		bo.src = "sounds/bo.wav"
		var bu = new Audio();
		bu.src = "sounds/bu.wav"
		
		var ka = new Audio();
		ka.src = "sounds/ka.wav"
		var ke = new Audio();
		ke.src = "sounds/ke.wav"
		var ki = new Audio();
		ki.src = "sounds/ki.wav"
		var ko = new Audio();
		ko.src = "sounds/ko.wav"
		var ku = new Audio();
		ku.src = "sounds/ku.wav"
		
		var da = new Audio();
		da.src = "sounds/da.wav"
		var de = new Audio();
		de.src = "sounds/de.wav"
		var di = new Audio();
		di.src = "sounds/di.wav"
		var do_1 = new Audio();
		do_1.src = "sounds/do.wav"
		var du = new Audio();
		du.src = "sounds/du.wav"
		
		var ga = new Audio();
		ga.src = "sounds/ga.wav"
		var ge = new Audio();
		ge.src = "sounds/ge.wav"
		var gi = new Audio();
		gi.src = "sounds/gi.wav"
		var go = new Audio();
		go.src = "sounds/go.wav"
		var gu = new Audio();
		gu.src = "sounds/gu.wav"
		
		var ha = new Audio();
		ha.src = "sounds/ha.wav"
		var he = new Audio();
		he.src = "sounds/he.wav"
		var hi = new Audio();
		hi.src = "sounds/hi.wav"
		var ho = new Audio();
		ho.src = "sounds/ho.wav"
		var hu = new Audio();
		hu.src = "sounds/hu.wav"
		
		var la = new Audio();
		la.src = "sounds/la.wav"
		var le = new Audio();
		le.src = "sounds/le.wav"
		var li = new Audio();
		li.src = "sounds/li.wav"
		var lo = new Audio();
		lo.src = "sounds/lo.wav"
		var lu = new Audio();
		lu.src = "sounds/lu.wav"
		
		var ma = new Audio();
		ma.src = "sounds/ma.wav"
		var me = new Audio();
		me.src = "sounds/me.wav"
		var mi = new Audio();
		mi.src = "sounds/mi.wav"
		var mo = new Audio();
		mo.src = "sounds/mo.wav"
		var mu = new Audio();
		mu.src = "sounds/mu.wav"
		
		var na = new Audio();
		na.src = "sounds/na.wav"
		var ne = new Audio();
		ne.src = "sounds/ne.wav"
		var ni = new Audio();
		ni.src = "sounds/ni.wav"
		var no = new Audio();
		no.src = "sounds/no.wav"
		var nu = new Audio();
		nu.src = "sounds/nu.wav"
		
		var nga = new Audio();
		nga.src = "sounds/nga.wav"
		var nge = new Audio();
		nge.src = "sounds/nge.wav"
		var ngi = new Audio();
		ngi.src = "sounds/ngi.wav"
		var ngo = new Audio();
		ngo.src = "sounds/ngo.wav"
		var ngu = new Audio();
		ngu.src = "sounds/ngu.wav"
		
		var pa = new Audio();
		pa.src = "sounds/pa.wav"
		var pe = new Audio();
		pe.src = "sounds/pe.wav"
		var pi = new Audio();
		pi.src = "sounds/pi.wav"
		var po = new Audio();
		po.src = "sounds/po.wav"
		var pu = new Audio();
		pu.src = "sounds/pu.wav"
		
		var ra = new Audio();
		ra.src = "sounds/ra.wav"
		var re = new Audio();
		re.src = "sounds/re.wav"
		var ri = new Audio();
		ri.src = "sounds/ri.wav"
		var ro = new Audio();
		ro.src = "sounds/ro.wav"
		var ru = new Audio();
		ru.src = "sounds/ru.wav"
		
		var sa = new Audio();
		sa.src = "sounds/sa.wav"
		var se = new Audio();
		se.src = "sounds/se.wav"
		var si = new Audio();
		si.src = "sounds/si.wav"
		var so = new Audio();
		so.src = "sounds/so.wav"
		var su = new Audio();
		su.src = "sounds/su.wav"
		
		var ta = new Audio();
		ta.src = "sounds/ta.wav"
		var te = new Audio();
		te.src = "sounds/te.wav"
		var ti = new Audio();
		ti.src = "sounds/ti.wav"
		var to = new Audio();
		to.src = "sounds/to.wav"
		var tu = new Audio();
		tu.src = "sounds/tu.wav"
		
		var wa = new Audio();
		wa.src = "sounds/wa.wav"
		var we = new Audio();
		we.src = "sounds/we.wav"
		var wi = new Audio();
		wi.src = "sounds/wi.wav"
		var wo = new Audio();
		wo.src = "sounds/wo.wav"
		var wu = new Audio();
		wu.src = "sounds/wu.wav"
		
		var ya = new Audio();
		ya.src = "sounds/ya.wav"
		var ye = new Audio();
		ye.src = "sounds/ye.wav"
		var yi = new Audio();
		yi.src = "sounds/yi.wav"
		var yo = new Audio();
		yo.src = "sounds/yo.wav"
		var yu = new Audio();
		yu.src = "sounds/yu.wav"

		

