/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Geena_app\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-alert-circle': '&#xe902;',
		'icon-arrow-down-circle': '&#xe900;',
		'icon-arrow-left': '&#xe901;',
		'icon-arrow-left-circle': '&#xe903;',
		'icon-arrow-right': '&#xe904;',
		'icon-arrow-right-circle': '&#xe905;',
		'icon-arrow-up': '&#xe906;',
		'icon-arrow-up-circle': '&#xe907;',
		'icon-analytics': '&#xe908;',
		'icon-notification': '&#xe909;',
		'icon-bookmark': '&#xe90b;',
		'icon-chevron-down': '&#xe90c;',
		'icon-chevron-left': '&#xe90d;',
		'icon-chevron-right': '&#xe90e;',
		'icon-chevron-up': '&#xe90f;',
		'icon-external-link': '&#xe910;',
		'icon-facebook': '&#xe911;',
		'icon-file': '&#xe912;',
		'icon-file-text': '&#xe913;',
		'icon-heart': '&#xe914;',
		'icon-help': '&#xe915;',
		'icon-home': '&#xe916;',
		'icon-image': '&#xe917;',
		'icon-instagram': '&#xe918;',
		'icon-link': '&#xe919;',
		'icon-mail': '&#xe91a;',
		'icon-explore-business': '&#xe91b;',
		'icon-map': '&#xe91c;',
		'icon-meh': '&#xe91d;',
		'icon-navigation': '&#xe91e;',
		'icon-navigation-2': '&#xe91f;',
		'icon-attach': '&#xe920;',
		'icon-printer': '&#xe921;',
		'icon-search': '&#xe922;',
		'icon-settings': '&#xe923;',
		'icon-share-2': '&#xe925;',
		'icon-thumbs-down': '&#xe926;',
		'icon-thumbs-up': '&#xe927;',
		'icon-trash-2': '&#xe928;',
		'icon-twitter': '&#xe929;',
		'icon-profile': '&#xe92a;',
		'icon-cancel': '&#xe92b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
