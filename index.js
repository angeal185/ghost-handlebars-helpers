var hbs             = require('express-hbs'),
    Promise         = require('bluebird'),
    errors          = require('../errors'),
    utils           = require('./utils'),
    i18n            = require('../i18n'),
    coreHelpers     = {},
    registerHelpers;

if (!utils.isProduction) {
    hbs.handlebars.logger.level = 0;
}

coreHelpers.asset  = require('./asset');
coreHelpers.author  = require('./author');
coreHelpers.body_class  = require('./body_class');
coreHelpers.content  = require('./content');
coreHelpers.date  = require('./date');
coreHelpers.encode  = require('./encode');
coreHelpers.excerpt  = require('./excerpt');
coreHelpers.facebook_url = require('./facebook_url');
coreHelpers.foreach = require('./foreach');
coreHelpers.get = require('./get');
coreHelpers.ghost_foot = require('./ghost_foot');
coreHelpers.ghost_head = require('./ghost_head');
coreHelpers.image = require('./image');
coreHelpers.is = require('./is');
coreHelpers.has = require('./has');
coreHelpers.meta_description = require('./meta_description');
coreHelpers.meta_title = require('./meta_title');
coreHelpers.navigation = require('./navigation');
coreHelpers.pagination = require('./pagination');
coreHelpers.plural = require('./plural');
coreHelpers.post_class = require('./post_class');
coreHelpers.prev_post = require('./prev_next');
coreHelpers.next_post = require('./prev_next');
coreHelpers.tags = require('./tags');
coreHelpers.title = require('./title');
coreHelpers.twitter_url = require('./twitter_url');
coreHelpers.url = require('./url');



//////////addons////////
coreHelpers.tag_cloud = require('./tag_cloud');
coreHelpers.capitalize = require('./custom/capitalize');
coreHelpers.phoneNumber = require('./custom/phoneNumber');
coreHelpers.camelcase = require('./custom/camelcase');
coreHelpers.hyphenate = require('./custom/hyphenate');
coreHelpers.pascalcase = require('./custom/pascalcase');
coreHelpers.upper = require('./custom/upper');
coreHelpers.titleize = require('./custom/titleize');
coreHelpers.stripProtocol = require('./custom/stripProtocol');
coreHelpers.css = require('./custom/css');
coreHelpers.cssDev = require('./custom/cssDev');
coreHelpers.xcss = require('./custom/xcss');
coreHelpers.js = require('./custom/js');
coreHelpers.jsDev = require('./custom/jsDev');
coreHelpers.xjs = require('./custom/xjs');
coreHelpers.snipjs = require('./custom/snipjs');
coreHelpers.img = require('./custom/img');
coreHelpers.imgURL = require('./custom/imgURL');
coreHelpers.list = require('./custom/list');
coreHelpers.trim = require('./custom/trim');
coreHelpers.basename = require('./custom/basename');
coreHelpers.stem = require('./custom/stem');
coreHelpers.relative = require('./custom/relative');
coreHelpers.gist = require('./custom/gist');
coreHelpers.gitlab = require('./custom/gitlab');
coreHelpers.lazy = require('./custom/lazy');
coreHelpers.fixedBtn = require('./custom/fixedBtn');
coreHelpers.download = require('./custom/download');
coreHelpers.readdir = require('./custom/readdir');
coreHelpers.or = require('./custom/or');
coreHelpers.isObject = require('./custom/isObject');
coreHelpers.isString = require('./custom/isString');
coreHelpers.ghost_head_custom = require('./ghost_head_custom');
coreHelpers.ghost_head_convert = require('./custom/ghost_head_convert');
coreHelpers.twitterFollow = require('./custom/twitterFollow');
coreHelpers.tweet = require('./custom/tweet');
coreHelpers.twitterTimeline = require('./custom/twitterTimeline');
coreHelpers.flickrWidget = require('./custom/flickrWidget');
coreHelpers.pinFollow = require('./custom/pinFollow');
coreHelpers.pinSingle = require('./custom/pinSingle');
coreHelpers.pinBoard = require('./custom/pinBoard');
coreHelpers.pinProfile = require('./custom/pinProfile');
coreHelpers.fbLike = require('./custom/fbLike');
coreHelpers.fbFollow = require('./custom/fbFollow');
coreHelpers.fbPost = require('./custom/fbPost');
coreHelpers.youtube = require('./custom/youtube');
coreHelpers.vimeo = require('./custom/vimeo');
coreHelpers.shareBlock = require('./custom/shareBlock');
coreHelpers.codepen = require('./custom/codepen');
coreHelpers.jsfiddle = require('./custom/jsfiddle');
coreHelpers.lnk = require('./custom/lnk');
coreHelpers.fileSize = require('./custom/fileSize');
coreHelpers.ordinalize = require('./custom/ordinalize');
coreHelpers.abbrCount = require('./custom/abbrCount');
coreHelpers.capitalizeAll = require('./custom/capitalizeAll');
coreHelpers.lowercase = require('./custom/lowercase');
coreHelpers.ghbtn = require('./custom/ghbtn');
coreHelpers.repeat = require('./custom/repeat');
coreHelpers.datetime = require('./custom/datetime');
coreHelpers.datetimeYYYYMM = require('./custom/datetimeYYYYMM');
coreHelpers.stringify = require('./custom/stringify');
coreHelpers.table = require('./custom/table');
coreHelpers.commas = require('./custom/commas');
coreHelpers.reddit = require('./custom/reddit');
coreHelpers.linkedin = require('./custom/linkedin');
coreHelpers.vid = require('./custom/vid');
coreHelpers.iframe = require('./custom/iframe');
coreHelpers.flow = require('./custom/flow');
coreHelpers.bq = require('./custom/bq');
coreHelpers.cardPanel = require('./custom/cardPanel');
coreHelpers.mdIcon = require('./custom/mdIcon');
coreHelpers.faIcon = require('./custom/faIcon');
coreHelpers.imgBox = require('./custom/imgBox');
coreHelpers.QR = require('./custom/QR');
coreHelpers.chatroom = require('./custom/chatroom');


// Specialist helpers for certain templates
coreHelpers.input_password = require('./input_password');
coreHelpers.input_email = require('./input_email');
coreHelpers.page_url = require('./page_url');
coreHelpers.pageUrl = require('./page_url').deprecated;

coreHelpers.helperMissing = function (arg) {
    if (arguments.length === 2) {
        return undefined;
    }
    errors.logError(i18n.t('warnings.helpers.index.missingHelper', {arg: arg}));
};

// Register an async handlebars helper for a given handlebars instance
function registerAsyncHelper(hbs, name, fn) {
    hbs.registerAsyncHelper(name, function (context, options, cb) {
        // Handle the case where we only get context and cb
        if (!cb) {
            cb = options;
            options = undefined;
        }

        // Wrap the function passed in with a when.resolve so it can return either a promise or a value
        Promise.resolve(fn.call(this, context, options)).then(function (result) {
            cb(result);
        }).catch(function (err) {
            errors.logAndThrowError(err, 'registerAsyncThemeHelper: ' + name);
        });
    });
}


// Register a handlebars helper for themes
function registerThemeHelper(name, fn) {
    hbs.registerHelper(name, fn);
}

// Register an async handlebars helper for themes
function registerAsyncThemeHelper(name, fn) {
    registerAsyncHelper(hbs, name, fn);
}

// Register a handlebars helper for admin
function registerAdminHelper(name, fn) {
    coreHelpers.adminHbs.registerHelper(name, fn);
}

registerHelpers = function (adminHbs) {
    // Expose hbs instance for admin
    coreHelpers.adminHbs = adminHbs;

    // Register theme helpers
    registerThemeHelper('asset', coreHelpers.asset);
    registerThemeHelper('author', coreHelpers.author);
    registerThemeHelper('body_class', coreHelpers.body_class);
    registerThemeHelper('content', coreHelpers.content);
    registerThemeHelper('date', coreHelpers.date);
    registerThemeHelper('encode', coreHelpers.encode);
    registerThemeHelper('excerpt', coreHelpers.excerpt);
    registerThemeHelper('foreach', coreHelpers.foreach);
    registerThemeHelper('has', coreHelpers.has);
    registerThemeHelper('is', coreHelpers.is);
    registerThemeHelper('image', coreHelpers.image);
    registerThemeHelper('input_email', coreHelpers.input_email);
    registerThemeHelper('input_password', coreHelpers.input_password);
    registerThemeHelper('meta_description', coreHelpers.meta_description);
    registerThemeHelper('meta_title', coreHelpers.meta_title);
    registerThemeHelper('navigation', coreHelpers.navigation);
    registerThemeHelper('page_url', coreHelpers.page_url);
    registerThemeHelper('pageUrl', coreHelpers.pageUrl);
    registerThemeHelper('pagination', coreHelpers.pagination);
    registerThemeHelper('plural', coreHelpers.plural);
    registerThemeHelper('post_class', coreHelpers.post_class);
    registerThemeHelper('tags', coreHelpers.tags);
    registerThemeHelper('title', coreHelpers.title);
    registerThemeHelper('twitter_url', coreHelpers.twitter_url);
    registerThemeHelper('facebook_url', coreHelpers.facebook_url);
    registerThemeHelper('url', coreHelpers.url);
	////////////////
	registerThemeHelper('embeddedjson', coreHelpers.embeddedjson);
	registerThemeHelper('imgURL', coreHelpers.imgURL);
	

    // Async theme helpers
    registerAsyncThemeHelper('ghost_foot', coreHelpers.ghost_foot);
    registerAsyncThemeHelper('ghost_head', coreHelpers.ghost_head);
    registerAsyncThemeHelper('next_post', coreHelpers.next_post);
    registerAsyncThemeHelper('prev_post', coreHelpers.prev_post);
    registerAsyncThemeHelper('get', coreHelpers.get);
	////////////////
	
	
	/* custom-helpers */
	registerAsyncThemeHelper('tag_cloud', coreHelpers.tag_cloud);
	registerAsyncThemeHelper('themejson', coreHelpers.themejson);
	registerAsyncThemeHelper('camelcase', coreHelpers.camelcase);
	registerAsyncThemeHelper('capitalize', coreHelpers.capitalize);
	registerAsyncThemeHelper('phoneNumber', coreHelpers.phoneNumber);
	registerAsyncThemeHelper('hyphenate', coreHelpers.hyphenate);
	registerAsyncThemeHelper('lowercase', coreHelpers.lowercase);
	registerAsyncThemeHelper('pascalcase', coreHelpers.pascalcase);
	registerAsyncThemeHelper('upper', coreHelpers.upper);
	registerAsyncThemeHelper('titleize', coreHelpers.titleize);
	registerAsyncThemeHelper('stripProtocol', coreHelpers.stripProtocol);
	registerAsyncThemeHelper('css', coreHelpers.css);
	registerAsyncThemeHelper('cssDev', coreHelpers.cssDev);
	registerAsyncThemeHelper('xcss', coreHelpers.xcss);
	registerAsyncThemeHelper('js', coreHelpers.js);
	registerAsyncThemeHelper('snipjs', coreHelpers.snipjs);
	registerAsyncThemeHelper('jsDev', coreHelpers.jsDev);
	registerAsyncThemeHelper('xjs', coreHelpers.xjs);
	registerAsyncThemeHelper('img', coreHelpers.img);
	
	registerAsyncThemeHelper('trim', coreHelpers.trim);
	registerAsyncThemeHelper('basename', coreHelpers.basename);
	registerAsyncThemeHelper('stem', coreHelpers.stem);
	registerAsyncThemeHelper('relative', coreHelpers.relative);
	registerAsyncThemeHelper('gitlab', coreHelpers.gitlab);
	registerAsyncThemeHelper('download', coreHelpers.download);
	registerAsyncThemeHelper('readdir', coreHelpers.readdir);
	registerAsyncThemeHelper('or', coreHelpers.or);
	registerAsyncThemeHelper('isObject', coreHelpers.isObject);
	registerAsyncThemeHelper('isString', coreHelpers.isString);
	registerAsyncThemeHelper('list', coreHelpers.list);
	registerAsyncThemeHelper('lazy', coreHelpers.lazy);
	registerAsyncThemeHelper('fixedBtn', coreHelpers.fixedBtn);
		/* social-helpers */
	registerAsyncThemeHelper('gist', coreHelpers.gist);							//github
	registerAsyncThemeHelper('twitterFollow', coreHelpers.twitterFollow);		//twitter
	registerAsyncThemeHelper('tweet', coreHelpers.tweet);						//twitter
	registerAsyncThemeHelper('twitterTimeline', coreHelpers.twitterTimeline);  	//twitter
	registerAsyncThemeHelper('flickrWidget', coreHelpers.flickrWidget);			//flickr
	registerAsyncThemeHelper('pinFollow', coreHelpers.pinFollow);   			//pinterest
	registerAsyncThemeHelper('pinSingle', coreHelpers.pinSingle);				//pinterest
	registerAsyncThemeHelper('pinBoard', coreHelpers.pinBoard);					//pinterest
	registerAsyncThemeHelper('pinProfile', coreHelpers.pinProfile);				//pinterest
	registerAsyncThemeHelper('fbLike', coreHelpers.fbLike);						//facebook
	registerAsyncThemeHelper('fbFollow', coreHelpers.fbFollow);					//facebook
	registerAsyncThemeHelper('fbPost', coreHelpers.fbPost);						//facebook
	registerAsyncThemeHelper('youtube', coreHelpers.youtube);					//youtube
	registerAsyncThemeHelper('vimeo', coreHelpers.vimeo);						//vimeo
	registerAsyncThemeHelper('codepen', coreHelpers.codepen);					//codepen
	registerAsyncThemeHelper('jsfiddle', coreHelpers.jsfiddle);					//jsfiddle
	registerAsyncThemeHelper('lnk', coreHelpers.lnk);							//lnk
	registerAsyncThemeHelper('shareBlock', coreHelpers.shareBlock);				//shareBlock
	registerAsyncThemeHelper('abbrCount', coreHelpers.abbrCount);				
	registerAsyncThemeHelper('fileSize', coreHelpers.fileSize);
	registerAsyncThemeHelper('capitalizeAll', coreHelpers.capitalizeAll);
	registerAsyncThemeHelper('ordinalize', coreHelpers.ordinalize);
	registerAsyncThemeHelper('datetime', coreHelpers.datetime);
	registerAsyncThemeHelper('datetimeYYYYMM', coreHelpers.datetimeYYYYMM);
	registerAsyncThemeHelper('stringify', coreHelpers.stringify);
	registerAsyncThemeHelper('ghbtn', coreHelpers.ghbtn);
	registerAsyncThemeHelper('table', coreHelpers.table);
	registerAsyncThemeHelper('commas', coreHelpers.commas);
	registerAsyncThemeHelper('repeat', coreHelpers.repeat);
	registerAsyncThemeHelper('reddit', coreHelpers.reddit);						//reddit
	registerAsyncThemeHelper('linkedin', coreHelpers.linkedin);					//linkedin
	registerAsyncThemeHelper('vid', coreHelpers.vid);							//responsive video
	registerAsyncThemeHelper('iframe', coreHelpers.iframe);						//responsive iframe
	registerAsyncThemeHelper('flow', coreHelpers.flow);							//responsive text
	registerAsyncThemeHelper('bq', coreHelpers.bq);								//responsive blockquote
	registerAsyncThemeHelper('cardPanel', coreHelpers.cardPanel);				//card-panel
	registerAsyncThemeHelper('mdIcon', coreHelpers.mdIcon);						//material-design icon
	registerAsyncThemeHelper('faIcon', coreHelpers.faIcon);						//font-awesome icon
	registerAsyncThemeHelper('imgBox', coreHelpers.imgBox);						//materialboxed img
	registerAsyncThemeHelper('QR', coreHelpers.QR);								//QR reader
	registerAsyncThemeHelper('chatroom', coreHelpers.chatroom);					//chatroom

	registerAsyncThemeHelper('ghost_head_convert', coreHelpers.ghost_head_convert);
	registerAsyncThemeHelper('ghost_head_custom', coreHelpers.ghost_head_custom);
	
	
	
    // Register admin helpers
    registerAdminHelper('asset', coreHelpers.asset);
    registerAdminHelper('input_password', coreHelpers.input_password);
	registerAdminHelper('css', coreHelpers.css);
};

module.exports = coreHelpers;
module.exports.loadCoreHelpers = registerHelpers;
module.exports.registerThemeHelper = registerThemeHelper;
module.exports.registerAsyncThemeHelper = registerAsyncThemeHelper;
